'use client';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScannerForm from '../components/ScannerForm';
import ResultsDisplay from '../components/ResultsDisplay';

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

        </div>
      </main>

      <Footer />
    </div>
  );
}
