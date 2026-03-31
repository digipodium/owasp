const axios = require('axios');
const cheerio = require('cheerio');
const { URL } = require('url');
const ScanReport = require('../models/ScanReport');

// --- Helper Functions ---

const addVulnerability = (report, { id, category, severity, description, details, remediation, score }) => {
    report.owaspTop10.push({ id, category, severity, description, details, remediation });
    report.summary.vulnerabilitiesFound++;
    report.summary.riskScore += score;
};

const checkHeaders = (headers, report) => {
    const securityHeaders = [
        { name: 'strict-transport-security', score: 5 },
        { name: 'x-content-type-options', score: 5 },
        { name: 'x-frame-options', score: 5 },
        { name: 'content-security-policy', score: 10 },
        { name: 'referrer-policy', score: 5 },
        { name: 'permissions-policy', score: 5 }
    ];

    // Each header check counts as a performed check
    report.summary.checksPerformed += securityHeaders.length;

    const missing = securityHeaders.filter(h => !headers[h.name]);

    if (missing.length > 0) {
        addVulnerability(report, {
            id: 'A05:2021',
            category: 'Security Misconfiguration',
            severity: 'Medium',
            description: 'Missing recommended security headers',
            details: `Missing: ${missing.map(h => h.name).join(', ')}`,
            remediation: 'Configure web server (Nginx/Apache/IIS) to send these security headers.',
            score: missing.reduce((acc, curr) => acc + curr.score, 0)
        });
    }

    report.summary.checksPerformed++; // Server leakage check
    if (headers['server'] || headers['x-powered-by']) {
        addVulnerability(report, {
            id: 'A05:2021',
            category: 'Security Misconfiguration',
            severity: 'Low',
            description: 'Server Information Leakage',
            details: `Exposed: ${headers['server'] || ''} ${headers['x-powered-by'] || ''}`,
            remediation: 'Disable Server and X-Powered-By banners in server config.',
            score: 5
        });
    }
};

const checkSSL = (url, report) => {
    report.summary.checksPerformed++;
    if (!url.startsWith('https://')) {
        addVulnerability(report, {
            id: 'A02:2021',
            category: 'Cryptographic Failures',
            severity: 'High',
            description: 'Not using HTTPS',
            details: 'Traffic is not encrypted.',
            remediation: 'Enforce HTTPS and redirect HTTP traffic.',
            score: 20
        });
    }
};

const checkForms = ($, isHttps, report) => {
    const forms = $('form');
    // We check for CSRF and Password/HTTP issues
    report.summary.checksPerformed += 2;

    if (forms.length === 0) return;

    let hasCsrf = false;
    let passwordPlain = false;

    forms.each((i, form) => {
        const inputs = $(form).find('input');

        // CSRF Check logic
        inputs.each((j, input) => {
            const name = $(input).attr('name') || '';
            const type = $(input).attr('type') || '';
            if (name.match(/csrf|token|nonce/i)) hasCsrf = true;

            // Password over HTTP
            if (type === 'password' && !isHttps) {
                passwordPlain = true;
            }
        });
    });

    if (!hasCsrf) {
        addVulnerability(report, {
            id: 'A01:2021',
            category: 'Broken Access Control',
            severity: 'Medium',
            description: 'Potential Missing CSRF Protection',
            details: 'No anti-CSRF tokens detected in forms.',
            remediation: 'Implement Anti-CSRF tokens for state-changing operations.',
            score: 10
        });
    }

    if (passwordPlain) {
        addVulnerability(report, {
            id: 'A07:2021',
            category: 'Identification and Authentication Failures',
            severity: 'Critical',
            description: 'Password transmitted insecurely',
            details: 'Password field found on non-HTTPS page.',
            remediation: 'Use HTTPS for all login pages.',
            score: 30
        });
    }
};

const checkEmailExposure = (html, report) => {
    report.summary.checksPerformed++;
    const emailRegex = /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}/g;
    const emails = html.match(emailRegex);
    if (emails && emails.length > 0) {
        // Filter out common false positives or example emails if needed
        const uniqueEmails = [...new Set(emails)].slice(0, 5); // Limit to 5
        addVulnerability(report, {
            id: 'A04:2021',
            category: 'Insecure Design',
            severity: 'Low',
            description: 'Email Address Exposure',
            details: `Found emails: ${uniqueEmails.join(', ')}`,
            remediation: 'Obfuscate emails or use contact forms to prevent harvesting.',
            score: 5
        });
    }
};

const checkSensitiveFiles = async (baseUrl, report) => {
    report.summary.checksPerformed++;
    try {
        const robotsUrl = new URL('/robots.txt', baseUrl).toString();
        const res = await axios.get(robotsUrl, { validateStatus: () => true, timeout: 3000 });
        if (res.status === 200) {
            const sensitiveEntries = res.data.toString().match(/Disallow:\s*\/(admin|backup|config|db|private|logs)/i);
            if (sensitiveEntries) {
                addVulnerability(report, {
                    id: 'A01:2021',
                    category: 'Broken Access Control',
                    severity: 'Low',
                    description: 'Sensitive Paths in robots.txt',
                    details: `Found disallowed path: ${sensitiveEntries[0]}`,
                    remediation: 'Ensure these paths are actually secured, not just hidden.',
                    score: 5
                });
            }
        }
    } catch (e) {
        // Ignore connection errors for optional file checks
    }
};

const checkOutdatedComponents = ($, report) => {
    report.summary.checksPerformed++;
    const generator = $('meta[name="generator"]').attr('content');
    if (generator) {
        addVulnerability(report, {
            id: 'A06:2021',
            category: 'Vulnerable and Outdated Components',
            severity: 'Info',
            description: 'Version Information Exposed',
            details: `Generator meta tag found: ${generator}. exposing version info helps attackers find specific exploits.`,
            remediation: 'Remove version information (meta tags, headers) from production.',
            score: 5
        });
    }
};

const checkCookies = (headers, isHttps, report) => {
    // Only count as a check if cookies are actually present to check
    const cookies = headers['set-cookie'];
    if (!cookies) return;

    report.summary.checksPerformed++;

    let insecureCookies = 0;
    cookies.forEach(cookie => {
        if (!cookie.includes('HttpOnly') || !cookie.includes('Secure')) {
            insecureCookies++;
        }
    });

    if (insecureCookies > 0) {
        addVulnerability(report, {
            id: 'A05:2021',
            category: 'Security Misconfiguration',
            severity: 'Low',
            description: 'Insecure Cookie Attributes',
            details: 'Cookies missing HttpOnly or Secure flags.',
            remediation: 'Set HttpOnly and Secure flags for all session cookies.',
            score: 5
        });
    }
}

// --- Main Controller ---

exports.analyzeUrl = async (req, res) => {
    const { url: targetUrl } = req.body;

    if (!targetUrl) return res.status(400).json({ error: 'URL is required' });

    try {
        new URL(targetUrl);
    } catch (e) {
        return res.status(400).json({ error: 'Invalid URL' });
    }

    const report = {
        target: targetUrl,
        timestamp: new Date(),
        summary: { riskScore: 0, vulnerabilitiesFound: 0, checksPerformed: 0 },
        owaspTop10: []
    };

    try {
        const response = await axios.get(targetUrl, {
            headers: { 'User-Agent': 'OWASP-Scanner-Bot/1.0' },
            validateStatus: () => true,
            timeout: 15000
        });

        const html = typeof response.data === 'string' ? response.data : '';
        const $ = cheerio.load(html);
        const headers = response.headers;
        const isHttps = targetUrl.startsWith('https://');

        // Run Passive Checks
        checkHeaders(headers, report);
        checkSSL(targetUrl, report);
        checkForms($, isHttps, report);
        checkEmailExposure(html, report);
        checkOutdatedComponents($, report);
        checkCookies(headers, isHttps, report);

        // Run Async Checks
        await checkSensitiveFiles(targetUrl, report);

        // Cap Risk Score
        report.summary.riskScore = Math.min(report.summary.riskScore, 100);

        // Save to Database
        try {
            await ScanReport.create(report);
        } catch (dbError) {
            console.error('Database Save Error:', dbError.message);
            // Continue even if save fails, user still needs the report
        }

        res.json(report);

    } catch (error) {
        console.error('Scan failed:', error.message);
        res.status(500).json({ error: 'Scan failed', details: error.message });
    }
};

exports.getHistory = async (req, res) => {
    try {
        const history = await ScanReport.find().sort({ timestamp: -1 }).limit(10);
        res.json(history);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch history' });
    }
};
