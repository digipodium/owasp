import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { owaspRisks } from "../constants/owaspRisks";
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

    const severityCount = {
        critical: 0,
        high: 0,
        medium: 0,
        low: 0
    };

    owaspTop10.forEach(v => {
        const key = v.severity.toLowerCase();
        if (severityCount[key] !== undefined) {
            severityCount[key]++;
        }
    });

    const chartData = [
        { name: "Critical", value: severityCount.critical },
        { name: "High", value: severityCount.high },
        { name: "Medium", value: severityCount.medium },
        { name: "Low", value: severityCount.low },
    ];

    const COLORS = ["#ef4444", "#f97316", "#eab308", "#3b82f6"];

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
            {/* Severity Chart */}
            <div className="glass-panel p-6 rounded-2xl mb-10">
                <h3 className="text-lg font-bold text-white mb-4">
                    Vulnerability Severity Distribution
                </h3>

                <div className="w-full h-80">
                    <ResponsiveContainer>
                        <PieChart>
                            <Pie
                                data={chartData}
                                cx="50%"
                                cy="50%"
                                outerRadius={100}
                                dataKey="value"
                                label
                            >
                                {chartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* OWASP Top 10 Summary Map */}
            <div className="glass-panel p-6 rounded-2xl mb-10">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <span className="w-1 h-8 bg-indigo-500 rounded-full inline-block"></span>
                    OWASP Top 10 Coverage
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                    {owaspRisks.map((risk) => {
                        const isFound = owaspTop10.some(v => v.id.includes(risk.id));
                        return (
                            <div
                                key={risk.id}
                                className={`relative p-4 rounded-xl border transition-all duration-500 flex flex-col items-center justify-center text-center gap-1 group
                                    ${isFound
                                        ? 'bg-emerald-500/10 border-emerald-500 shadow-[0_0_15px_-3px_rgba(16,185,129,0.3)]'
                                        : 'bg-slate-900/40 border-slate-800 opacity-60'}`}
                            >
                                {isFound && (
                                    <div className="absolute -top-2 -right-2 bg-emerald-500 text-slate-950 rounded-full p-1 shadow-lg animate-bounce">
                                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                    </div>
                                )}
                                <span className={`text-xs font-mono font-bold ${isFound ? 'text-emerald-400' : 'text-slate-500'}`}>
                                    {risk.id}
                                </span>
                                <span className={`text-[10px] leading-tight font-medium line-clamp-2 ${isFound ? 'text-white' : 'text-slate-600'}`}>
                                    {risk.title}
                                </span>

                                {/* Tooltip on hover */}
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-slate-900 border border-slate-700 rounded-lg text-[10px] text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 shadow-2xl">
                                    {risk.description.substring(0, 100)}...
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-slate-700" />
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="mt-6 flex gap-4 text-xs">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-emerald-500 rounded border border-emerald-400"></div>
                        <span className="text-slate-400">Risk Identified</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-slate-800 rounded border border-slate-700"></div>
                        <span className="text-slate-400">Passed / Not Detected</span>
                    </div>
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
                                        <div className="flex items-center">
                                            <span className="bg-slate-900 border border-slate-700 px-2 py-1 rounded-l text-xs font-mono font-bold text-emerald-400">
                                                {vuln.id.split(':')[0]}
                                            </span>
                                            <span className={`px-2 py-1 rounded-r text-xs font-bold uppercase border border-l-0 ${getSeverityColor(vuln.severity)}`}>
                                                {vuln.severity}
                                            </span>
                                        </div>
                                        <h4 className="text-lg font-bold text-slate-200">{vuln.category}</h4>
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
