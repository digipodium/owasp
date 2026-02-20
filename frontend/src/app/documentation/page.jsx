import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Documentation() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Navbar />
            <main className="flex-1 max-w-7xl mx-auto px-4 py-20 w-full">
                <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-400 mb-8">
                    Documentation
                </h1>
                <div className="prose prose-invert max-w-none">
                    <div className="glass-panel p-8 rounded-2xl mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">How it works</h2>
                        <p className="text-slate-400 mb-4">
                            Antigravity Scanner performs a passive analysis of the target URL. It does not perform invasive penetration testing but rather checks for visible misconfigurations and security headers.
                        </p>
                        <ul className="list-disc list-inside text-slate-400 space-y-2">
                            <li>Analyzes HTTP Response Headers</li>
                            <li>Checks for SSL/TLS Configuration</li>
                            <li>Parses HTML for insecure forms and inputs</li>
                            <li>Detects information leakage (e.g. Server headers, emails)</li>
                        </ul>
                    </div>

                    <div className="glass-panel p-8 rounded-2xl">
                        <h2 className="text-2xl font-bold text-white mb-4">API Usage</h2>
                        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                            <code className="text-emerald-400">POST /api/scan</code>
                            <pre className="text-slate-500 mt-2 text-sm">
                                {`{
  "url": "https://example.com"
}`}
                            </pre>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
