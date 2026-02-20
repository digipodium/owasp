'use client';
import { useState } from 'react';
import axios from 'axios';
import { Search, ShieldAlert, ShieldCheck, Activity } from 'lucide-react';

export default function ScannerForm({ onScanStart, onScanComplete }) {
    const [url, setUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!url) return;

        setLoading(true);
        setError(null);
        onScanStart();

        try {
            const response = await axios.post('http://localhost:5000/api/scan', { url });
            onScanComplete(response.data);
        } catch (err) {
            console.error(err);
            setError(err.response?.data?.details || err.message || 'Failed to scan URL');
            onScanComplete(null);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto my-12">
            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />

                <div className="relative bg-[#0F172A] border border-slate-800 rounded-2xl p-8 shadow-2xl overflow-hidden">
                    {/* Background Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 mb-8">
                        <div className="p-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 text-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                            <Activity size={32} />
                        </div>
                        <div className="text-center md:text-left">
                            <h2 className="text-2xl font-black text-white tracking-tight">VULNERABILITY SCANNER</h2>
                            <p className="text-slate-400 font-mono text-sm mt-1">Initialize passive reconnaissance on target.</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="relative z-10 flex flex-col md:flex-row gap-4">
                        <div className="flex-1 relative group/input">
                            <Search className="absolute left-4 top-4 text-slate-500 group-focus-within/input:text-emerald-500 transition-colors" size={20} />
                            <input
                                type="text"
                                placeholder="https://target-system.com"
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                                className="w-full bg-slate-950/80 border border-slate-700 rounded-xl pl-12 pr-4 py-4 text-slate-100 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all placeholder:text-slate-600 font-mono text-sm shadow-inner"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className={`px-8 py-4 rounded-xl font-bold font-mono tracking-wide transition-all duration-300 transform active:scale-95 shadow-lg flex items-center justify-center gap-2
                ${loading
                                    ? 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
                                    : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-500/20'
                                }`}
                        >
                            {loading ? (
                                <>
                                    <span className="animate-spin w-4 h-4 border-2 border-slate-500 border-t-white rounded-full"></span>
                                    SCANNING...
                                </>
                            ) : (
                                'INITIATE SCAN'
                            )}
                        </button>
                    </form>

                    {error && (
                        <div className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm flex items-center gap-3 font-mono">
                            <ShieldAlert size={20} className="shrink-0" />
                            <span><strong className="uppercase">Error:</strong> {error}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
