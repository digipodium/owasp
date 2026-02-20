import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="w-full h-16 border-b border-slate-800 bg-slate-950/50 backdrop-blur-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center font-bold text-slate-900 shadow-[0_0_15px_rgba(16,185,129,0.5)]">
                        A
                    </div>
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                        Antigravity<span className="text-emerald-500">Scanner</span>
                    </span>
                </Link>

                <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-400">
                    <Link href="/documentation" className="hover:text-emerald-400 transition-colors">Documentation</Link>
                    <Link href="/owasp-top-10" className="hover:text-emerald-400 transition-colors">OWASP Top 10</Link>
                    <Link href="/about" className="hover:text-emerald-400 transition-colors">About</Link>
                    <Link href="/pricing" className="hover:text-emerald-400 transition-colors">Pricing</Link>
                    <Link href="/contact" className="hover:text-emerald-400 transition-colors">Contact</Link>
                    <Link href="/login">
                        <button className="px-4 py-2 bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 rounded-full hover:bg-emerald-500 hover:text-slate-900 transition-all duration-300">
                            Login
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
