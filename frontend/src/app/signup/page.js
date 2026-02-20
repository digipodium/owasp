'use client';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { ArrowRight, Lock, Mail, User, Shield, Check } from 'lucide-react';

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Signup attempt:', { name, email });
    };

    return (
        <div className="min-h-screen flex flex-col font-sans bg-[#0B1120] relative overflow-hidden selection:bg-emerald-500/30">
            <Navbar />

            {/* Background Ambience */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

            <main className="flex-1 flex items-center justify-center px-4 py-20 relative z-10">
                <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Side: Pitch */}
                    <div className="hidden lg:block space-y-8 pr-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/30 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-2">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            ACCEPTING NEW AGENTS
                        </div>
                        <h1 className="text-5xl font-black text-white leading-tight">
                            Join the <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-300">Defense Grid</span>
                        </h1>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            Access enterprise-grade vulnerability scanning tools. Secure your infrastructure with passive analysis and real-time reporting.
                        </p>

                        <div className="space-y-4">
                            {['Automated OWASP Analysis', 'PDF & CSV Export', 'Team Collaboration', 'API Access Token'].map((feature) => (
                                <div key={feature} className="flex items-center gap-3 text-slate-300">
                                    <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 text-emerald-500">
                                        <Check size={14} strokeWidth={3} />
                                    </div>
                                    {feature}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Form (Similar Cyber Aesthetic to Login) */}
                    <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 opacity-50" />

                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                            <Shield className="text-emerald-500" />
                            Register Account
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="space-y-2">
                                <label className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider ml-1">Full Designation</label>
                                <div className="relative group/input">
                                    <User className="absolute left-4 top-3.5 text-slate-500 group-focus-within/input:text-emerald-400 transition-colors" size={18} />
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full bg-slate-950/50 border border-slate-800/80 rounded-lg pl-12 pr-4 py-3 text-slate-300 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all placeholder:text-slate-700 font-mono text-sm"
                                        placeholder="OPERATOR NAME"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider ml-1">Contact Channel</label>
                                <div className="relative group/input">
                                    <Mail className="absolute left-4 top-3.5 text-slate-500 group-focus-within/input:text-emerald-400 transition-colors" size={18} />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full bg-slate-950/50 border border-slate-800/80 rounded-lg pl-12 pr-4 py-3 text-slate-300 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all placeholder:text-slate-700 font-mono text-sm"
                                        placeholder="user@domain.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider ml-1">Secure Passcode</label>
                                <div className="relative group/input">
                                    <Lock className="absolute left-4 top-3.5 text-slate-500 group-focus-within/input:text-emerald-400 transition-colors" size={18} />
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full bg-slate-950/50 border border-slate-800/80 rounded-lg pl-12 pr-4 py-3 text-slate-300 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all placeholder:text-slate-700 font-mono text-sm"
                                        placeholder="REQUIRED"
                                        required
                                    />
                                </div>
                            </div>

                            <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 rounded-lg transition-all shadow-lg shadow-emerald-900/20 mt-4 flex items-center justify-center gap-2 group relative overflow-hidden font-mono">
                                INITIALIZE REGISTRATION
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </button>

                            <p className="text-xs text-slate-600 text-center pt-2">
                                By registering, you agree to our <a href="#" className="text-emerald-500 hover:underline">Secure Usage Protocols</a>.
                            </p>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
