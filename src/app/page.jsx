'use client';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScannerForm from '../components/ScannerForm';
import ResultsDisplay from '../components/ResultsDisplay';
import { owaspRisks } from '../constants/owaspRisks';

export default function Home() {
  const [scanResults, setScanResults] = useState(null);
  const [isScanning, setIsScanning] = useState(false);

  const handleScanStart = () => {
    setIsScanning(true);
    setScanResults(null);
  };

  const handleScanComplete = (data) => {
    setIsScanning(false);
    setScanResults(data);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-emerald-500/30">
      <Navbar />

      <main className="flex-1 w-full relative">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-indigo-900/20 to-transparent -z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent -z-10" />

        <div className="max-w-7xl mx-auto px-4 pt-20 pb-20">

          {/* Hero Section */}
          <div className="text-center mb-16 space-y-6">
            <h1 className="text-5xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-400 pb-2">
              Secure Your Web Assets
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Automated passive vulnerability scanner powered by OWASP Top 10 insights.
              Detect missing headers, insecure configurations, and exposure risks instantly.
            </p>
          </div>

          <ScannerForm onScanStart={handleScanStart} onScanComplete={handleScanComplete} />

          {/* Results Section */}
          <div className="min-h-[200px]">
            {scanResults && <ResultsDisplay data={scanResults} />}

            {!scanResults && !isScanning && (
              <div className="text-center mt-20 opacity-50">
                <div className="inline-block p-4 rounded-full bg-slate-800/50 mb-4 border border-slate-700">
                  <svg className="w-8 h-8 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-slate-500 text-sm">Waiting for scan input...</p>
              </div>
            )}
          </div>

          {/* OWASP Top 10 Guide Section */}
          {!scanResults && !isScanning && (
            <div className="mt-40 animate-in fade-in duration-1000">
              <div className="flex items-center gap-4 mb-10">
                <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-slate-800"></div>
                <h2 className="text-3xl font-black text-white">OWASP Top 10 Reference</h2>
                <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent to-slate-800"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {owaspRisks.map((risk) => (
                  <div key={risk.id} className="glass-panel p-5 rounded-2xl border border-slate-800/50 hover:border-emerald-500/30 transition-all hover:-translate-y-1 group">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-emerald-500 font-mono font-bold text-xs">{risk.id}</span>
                      <div className="w-2 h-2 rounded-full bg-slate-700 group-hover:bg-emerald-500 transition-colors"></div>
                    </div>
                    <h3 className="text-sm font-bold text-slate-200 mb-2">{risk.title}</h3>
                    <p className="text-[10px] text-slate-500 leading-relaxed line-clamp-3 group-hover:text-slate-400">
                      {risk.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <a href="/owasp-top-10" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors">
                  Learn more in our full documentation
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}
