import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import { owaspRisks } from '../../constants/owaspRisks';

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
                    {owaspRisks.map((risk) => (
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
