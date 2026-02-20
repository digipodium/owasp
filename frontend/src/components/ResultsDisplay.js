export default function ResultsDisplay({ data }) {
    if (!data) return null;

    const { summary, owaspTop10, target } = data;

    const getSeverityColor = (severity) => {
        switch (severity.toLowerCase()) {
            case 'critical': return 'text-red-500 border-red-500/20 bg-red-500/5';
            case 'high': return 'text-orange-500 border-orange-500/20 bg-orange-500/5';
            case 'medium': return 'text-yellow-500 border-yellow-500/20 bg-yellow-500/5';
            case 'low': return 'text-blue-500 border-blue-500/20 bg-blue-500/5';
            default: return 'text-slate-400 border-slate-700 bg-slate-800/50';
        }
    };

    return (
        <div className="w-full max-w-5xl mx-auto pb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">

            {/* Target & Timestamp */}
            <div className="flex items-center justify-between mb-6 text-sm text-slate-500">
                <p>Target: <span className="text-emerald-400 font-mono">{target}</span></p>
                <p>Scanned: {new Date(data.timestamp).toLocaleString()}</p>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center text-center">
                    <div className={`text-4xl font-black mb-2 ${summary.riskScore > 70 ? 'text-red-500' : summary.riskScore > 30 ? 'text-yellow-500' : 'text-emerald-500'}`}>
                        {summary.riskScore}
                    </div>
                    <div className="text-slate-400 text-sm font-medium uppercase tracking-wider">Risk Score</div>
                </div>
                <div className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center text-center">
                    <div className="text-4xl font-black mb-2 text-white">
                        {summary.vulnerabilitiesFound}
                    </div>
                    <div className="text-slate-400 text-sm font-medium uppercase tracking-wider">Issues Found</div>
                </div>
                <div className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center text-center">
                    <div className="text-4xl font-black mb-2 text-white">
                        {summary.checksPerformed}
                    </div>
                    <div className="text-slate-400 text-sm font-medium uppercase tracking-wider">Checks Run</div>
                </div>
            </div>

            {/* Vulnerability List */}
            <div className="space-y-4">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-1 h-8 bg-emerald-500 rounded-full inline-block"></span>
                    Scan Findings
                </h3>

                {owaspTop10.length === 0 ? (
                    <div className="glass-panel p-8 rounded-2xl text-center">
                        <div className="text-6xl mb-4">🛡️</div>
                        <h4 className="text-xl font-bold text-emerald-400 mb-2">No Obvious Issues Detected</h4>
                        <p className="text-slate-400">Basic passive checks passed. Note: This does not mean the site is 100% secure.</p>
                    </div>
                ) : (
                    owaspTop10.map((vuln, idx) => (
                        <div key={idx} className={`border rounded-xl p-6 transition-all hover:bg-slate-800/30 ${getSeverityColor(vuln.severity)}`}>
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className={`px-2 py-1 rounded text-xs font-bold uppercase border ${getSeverityColor(vuln.severity)}`}>
                                            {vuln.severity}
                                        </span>
                                        <h4 className="text-lg font-bold text-slate-200">{vuln.id} - {vuln.category}</h4>
                                    </div>
                                    <p className="text-slate-300 mb-3">{vuln.description}</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                        <div className="bg-slate-950/50 p-3 rounded-lg border border-slate-800">
                                            <span className="text-slate-500 block mb-1 text-xs uppercase font-bold">Details</span>
                                            <code className="text-slate-300 break-all">{vuln.details}</code>
                                        </div>
                                        <div className="bg-emerald-950/20 p-3 rounded-lg border border-emerald-500/10">
                                            <span className="text-emerald-500 block mb-1 text-xs uppercase font-bold">Remediation</span>
                                            <p className="text-emerald-100">{vuln.remediation}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
