import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function About() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Navbar />
            <main className="flex-1 max-w-7xl mx-auto px-4 py-20 w-full">
                <div className="glass-panel p-10 rounded-3xl text-center max-w-4xl mx-auto">
                    <div className="w-20 h-20 bg-emerald-500 rounded-2xl flex items-center justify-center font-bold text-slate-900 text-4xl shadow-[0_0_30px_rgba(16,185,129,0.5)] mx-auto mb-6">
                        A
                    </div>
                    <h1 className="text-4xl font-bold text-white mb-6">About Antigravity Scanner</h1>
                    <p className="text-slate-400 text-lg leading-relaxed mb-8">
                        This project was built to help developers and security enthusiasts easily identify common vulnerabilities in web applications.
                        By automating passive checks, we aim to make the web a safer place, one scan at a time.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-12">
                        <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800">
                            <h3 className="text-emerald-400 font-bold mb-2">Passive Scanning</h3>
                            <p className="text-slate-500 text-sm">Non-intrusive analysis that does not trigger IDS/IPS or harm the target.</p>
                        </div>
                        <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800">
                            <h3 className="text-blue-400 font-bold mb-2">Modern Stack</h3>
                            <p className="text-slate-500 text-sm">Built with Next.js 15, Tailwind CSS, and Node.js for high performance.</p>
                        </div>
                        <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800">
                            <h3 className="text-purple-400 font-bold mb-2">Open Source</h3>
                            <p className="text-slate-500 text-sm">Transparent algorithms and checks based on industry standards.</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
