export default function Footer() {
    return (
        <footer className="w-full py-8 border-t border-slate-800 bg-slate-950 text-slate-400 text-sm mt-auto">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                <p>© 2024 Antigravity OWASP Scanner. Security for everyone.</p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a>
                    <a href="#" className="hover:text-emerald-400 transition-colors">GitHub</a>
                </div>
            </div>
        </footer>
    );
}
