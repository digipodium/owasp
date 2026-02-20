'use client';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { ArrowRight, Lock, Mail, ShieldCheck, Terminal } from 'lucide-react';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate network request
        setTimeout(() => {
            setIsLoading(false);
            console.log('Login attempt:', email);
        }, 2000);
    };

    return (
        <div className="min-h-screen flex flex-col font-sans bg-[#0B1120] relative overflow-hidden selection:bg-emerald-500/30">
            <Navbar />

            {/* Cyber Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0B1120] via-transparent to-[#0B1120] pointer-events-none" />

            <main className="flex-1 flex items-center justify-center px-4 py-20 relative z-10 w-full">
                <div className="w-full max-w-lg">

                    {/* Header / Logo Area */}
                    <div className="text-center mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <div className="inline-flex items-center justify-center p-4 bg-slate-900/50 rounded-2xl border border-slate-800 mb-6 group hover:border-emerald-500/50 transition-colors">
                            <ShieldCheck className="text-emerald-500 w-10 h-10 group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <h1 className="text-3xl font-black text-white tracking-tight mb-2">Secure Access</h1>
                        <p className="text-slate-400 font-mono text-sm">Authenticate to access vulnerability reports.</p>
                    </div>

                    {/* Login Card */}
                    <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-2xl p-8 shadow-2xl relative overflow-hidden group">
                        {/* Top Green Line */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-50" />

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs font-mono font-bold text-emerald-500/80 uppercase tracking-wider ml-1">Identity</label>
                                <div className="relative group/input">
                                    <Terminal className="absolute left-4 top-3.5 text-slate-500 group-focus-within/input:text-emerald-400 transition-colors" size={18} />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full bg-slate-950/50 border border-slate-800/80 rounded-lg pl-12 pr-4 py-3 text-slate-300 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all placeholder:text-slate-700 font-mono text-sm"
                                        placeholder="root@scanner.dev"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between items-center ml-1">
                                    <label className="text-xs font-mono font-bold text-emerald-500/80 uppercase tracking-wider">Passcode</label>
                                    <a href="#" className="text-xs text-slate-500 hover:text-emerald-400 transition-colors font-mono hover:underline decoration-emerald-500/30">Recover Access?</a>
                                </div>
                                <div className="relative group/input">
                                    <Lock className="absolute left-4 top-3.5 text-slate-500 group-focus-within/input:text-emerald-400 transition-colors" size={18} />
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full bg-slate-950/50 border border-slate-800/80 rounded-lg pl-12 pr-4 py-3 text-slate-300 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all placeholder:text-slate-700 font-mono text-sm"
                                        placeholder="••••••••••••"
                                        required
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 rounded-lg transition-all shadow-lg shadow-emerald-900/20 mt-2 flex items-center justify-center gap-2 group/btn relative overflow-hidden"
                            >
                                {isLoading ? (
                                    <span className="font-mono animate-pulse">AUTHENTICATING...</span>
                                ) : (
                                    <>
                                        <span className="font-mono tracking-wide">ESTABLISH SESSION</span>
                                        <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>

                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-slate-500 text-sm">
                            New to the platform? <Link href="/signup" className="text-emerald-400 hover:text-emerald-300 font-mono font-medium hover:underline decoration-emerald-500/30 underline-offset-4">Initialize Account</Link>
                        </p>
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
}
