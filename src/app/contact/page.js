'use client';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Mail, MapPin, Phone, Send, Terminal, MessageSquare, AlertTriangle } from 'lucide-react';

export default function Contact() {
    return (
        <div className="min-h-screen flex flex-col font-sans bg-[#0B1120] relative">
            <Navbar />

            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-900/10 blur-[120px] rounded-full pointer-events-none -z-10" />

            <main className="flex-1 max-w-7xl mx-auto px-4 py-24 w-full">

                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Command Center <span className="text-emerald-500">Comms</span></h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Establish a secure channel with our support team. Report vulnerabilities, request features, or get enterprise assistance.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Contact Information Cards */}
                    <div className="lg:col-span-1 space-y-4">
                        <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-emerald-500/30 transition-all group">
                            <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-500 mb-4 group-hover:scale-110 transition-transform">
                                <Terminal size={24} />
                            </div>
                            <h3 className="text-white font-bold text-lg mb-1">Technical Support</h3>
                            <p className="text-slate-400 text-sm mb-4">For scanning errors, API issues, and technical queries.</p>
                            <div className="text-emerald-400 font-mono text-sm">tech@antigravity.dev</div>
                        </div>

                        <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-blue-500/30 transition-all group">
                            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 mb-4 group-hover:scale-110 transition-transform">
                                <MessageSquare size={24} />
                            </div>
                            <h3 className="text-white font-bold text-lg mb-1">Sales & Enterprise</h3>
                            <p className="text-slate-400 text-sm mb-4">For bulk licensing and custom infrastructure.</p>
                            <div className="text-blue-400 font-mono text-sm">sales@antigravity.dev</div>
                        </div>

                        <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-red-500/30 transition-all group">
                            <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center text-red-500 mb-4 group-hover:scale-110 transition-transform">
                                <AlertTriangle size={24} />
                            </div>
                            <h3 className="text-white font-bold text-lg mb-1">Security Report</h3>
                            <p className="text-slate-400 text-sm mb-4">Report a bug in our own platform (Bug Bounty).</p>
                            <div className="text-red-400 font-mono text-sm">security@antigravity.dev</div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2 bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 lg:p-10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[80px] rounded-full pointer-events-none" />

                        <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                            <Mail className="text-slate-400" />
                            Transmit Message
                        </h2>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">Identity Name</label>
                                    <input type="text" className="w-full bg-slate-950/50 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-emerald-500/50 transition-all font-mono text-sm" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">Return Address</label>
                                    <input type="email" className="w-full bg-slate-950/50 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-emerald-500/50 transition-all font-mono text-sm" placeholder="user@company.com" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">Subject Line</label>
                                <select className="w-full bg-slate-950/50 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-emerald-500/50 transition-all font-mono text-sm">
                                    <option>General Inquiry</option>
                                    <option>Technical Support</option>
                                    <option>Enterprise Licensing</option>
                                    <option>Vulnerability Disclosure</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">Payload / Message</label>
                                <textarea className="w-full bg-slate-950/50 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-emerald-500/50 transition-all h-40 resize-none font-mono text-sm" placeholder="Describe your request..." />
                            </div>

                            <button type="submit" className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-emerald-500/10 flex items-center gap-2 group font-mono">
                                TRANSMIT DATA
                                <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
}
