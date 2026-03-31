export const owaspRisks = [
    {
        id: 'A01',
        title: 'Broken Access Control',
        description: 'A01 involves restrictions on what authenticated users are allowed to do. Vulnerabilities occur when users can act outside of their intended permissions, leading to unauthorized information disclosure, modification, or destruction of all data.'
    },
    {
        id: 'A02',
        title: 'Cryptographic Failures',
        description: 'A02 (formerly Sensitive Data Exposure) focuses on cryptographic failures. This leads to data breaches where sensitive data like passwords, credit card numbers, and health records are exposed or stolen. Risks include clear-text transmission and weak encryption keys.'
    },
    {
        id: 'A03',
        title: 'Injection',
        description: 'A03 involves injection of untrusted data into an interpreter as part of a command or query. Examples include SQL, NoSQL, OS, and LDAP injection. This can lead to data loss, corruption, or disclosure.'
    },
    {
        id: 'A04',
        title: 'Insecure Design',
        description: 'A04 focuses on risks related to design flaws. This is a broad category representing architectural flaws. A secure development lifecycle, threat modeling, and secure design patterns are key to prevention.'
    },
    {
        id: 'A05',
        title: 'Security Misconfiguration',
        description: 'A05 happens when security settings are defined, implemented, and maintained with defaults. This includes open cloud storage, misconfigured HTTP headers, and verbose error messages containing sensitive info.'
    },
    {
        id: 'A06',
        title: 'Vulnerable and Outdated Components',
        description: 'A06 (formerly Using Components with Known Vulnerabilities) is when you use libraries, frameworks, or other software modules with known vulnerabilities. If a vulnerable component is exploited, it can facilitate serious data loss or server takeover.'
    },
    {
        id: 'A07',
        title: 'Identification and Authentication Failures',
        description: 'A07 (formerly Broken Authentication) allows attackers to compromise passwords, keys, or session tokens, or to exploit other implementation flaws to assume other users identities temporarily or permanently.'
    },
    {
        id: 'A08',
        title: 'Software and Data Integrity Failures',
        description: 'A08 relates to code and infrastructure that does not protect against integrity violations. This includes using software from untrusted sources or repositories, and insecure CI/CD pipelines.'
    },
    {
        id: 'A09',
        title: 'Security Logging and Monitoring Failures',
        description: 'A09 (formerly Insufficient Logging & Monitoring) is critical for detecting active breaches. Failures here allow attackers to maintain access, pivot to more systems, and tamper with data without being detected.'
    },
    {
        id: 'A10',
        title: 'Server-Side Request Forgery (SSRF)',
        description: 'A10 occurs whenever a web application is fetching a remote resource without validating the user-supplied URL. It allows an attacker to coerce the application to send a crafted request to an unexpected destination.'
    }
];
