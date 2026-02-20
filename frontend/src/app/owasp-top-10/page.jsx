import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const risks = [
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

export default function OWASPTop10() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Navbar />
            <main className="flex-1 max-w-7xl mx-auto px-4 py-20 w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
                <h1 className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-400 mb-6 text-center">
                    OWASP Top 10 (2021)
                </h1>
                <p className="text-slate-400 mb-16 text-lg max-w-3xl mx-auto text-center leading-relaxed">
                    The <strong className="text-emerald-400">Open Web Application Security Project (OWASP)</strong> Top 10 is a standard awareness document for developers and web application security. It represents a broad consensus about the most critical security risks to web applications.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {risks.map((risk) => (
                        <div key={risk.id} className="group relative glass-panel p-8 rounded-3xl border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10">
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                            <div className="relative z-10">
                                <div className="flex items-start justify-between mb-4">
                                    <span className="text-5xl font-black text-slate-800/50 group-hover:text-emerald-500/20 transition-colors absolute -top-4 -right-4 select-none">
                                        {risk.id}
                                    </span>
                                    <div className="flex flex-col">
                                        <span className="text-emerald-500 font-mono font-bold text-sm mb-1 uppercase tracking-wider">{risk.id}</span>
                                        <h2 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">{risk.title}</h2>
                                    </div>
                                </div>

                                <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                                    {risk.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
