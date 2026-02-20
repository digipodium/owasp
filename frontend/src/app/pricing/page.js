'use client';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Target, Zap, Shield, Globe, Server, Database, Check } from 'lucide-react';

const plans = [
    {
        name: 'CIVILIAN',
        price: '$0',
        frequency: '/mo',
        description: 'Basic reconnaissance for individual researchers.',
        features: [
            'Standard OWASP Headers Check',
            'HTML Form Analysis',
            'Data Leakage Detection',
            'Public Support Channel'
        ],
        cta: 'INITIATE',
        popular: false,
        color: 'slate'
    },
    {
        name: 'OPERATOR',
        price: '$29',
        frequency: '/mo',
        description: 'Advanced capabilities for professional defense.',
        features: [
            'Deep Passive Scanning',
            'Full History Retention',
            'PDF / JSON Reports',
            'Priority Comms Channel',
            'API Access Key'
        ],
        cta: 'UPGRADE CLEARANCE',
        popular: true,
        color: 'emerald'
    },
    {
        name: 'ELITE',
        price: 'CUSTOM',
        frequency: '',
        description: 'Full spectrum dominance for organizations.',
        features: [
            'Dedicated Infrastructure',
            'Custom Rule Sets',
            'SSO Integration',
            'SLA Guarantees',
            '24/7 War Room Access'
        ],
        cta: 'CONTACT COMMAND',
        popular: false,
        color: 'blue'
    }
];

export default function Pricing() {
    return (
        <div className="min-h-screen flex flex-col font-sans bg-[#0B1120] relative overflow-hidden">
            <Navbar />

            {/* Tech Grid Info */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

            <main className="flex-1 max-w-7xl mx-auto px-4 py-24 w-full text-center relative z-10">
                <div className="mb-20 space-y-4">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-950/50 border border-emerald-500/20 text-emerald-400 font-mono text-xs mb-4">
                        SYSTEM STATUS: OPTIMAL
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase">
                        Clearance <span className="text-emerald-500">Levels</span>
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed font-light">
                        Select your operational tier. Upgrade for enhanced scanning depth and retention capabilities.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {plans.map((plan) => (
                        <div key={plan.name} className={`relative flex flex-col p-8 rounded-2xl border transition-all duration-300
                ${plan.popular
                                ? 'bg-slate-900/80 border-emerald-500 shadow-2xl shadow-emerald-500/10 scale-105 z-10'
                                : 'bg-slate-900/40 border-slate-800 hover:border-slate-600 hover:bg-slate-900/60'
                            }
            `}>

                            {plan.popular && (
                                <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500" />
                            )}

                            <div className="flex items-center justify-between mb-8">
                                <h3 className={`text-lg font-black font-mono tracking-widest ${plan.popular ? 'text-emerald-400' : 'text-slate-300'}`}>
                                    {plan.name}
                                </h3>
                                {plan.popular && <Target className="text-emerald-500" size={20} />}
                            </div>

                            <div className="flex items-baseline gap-1 mb-2 text-left">
                                <span className="text-5xl font-black text-white tracking-tighter">{plan.price}</span>
                                <span className="text-slate-500 font-medium font-mono text-sm">{plan.frequency}</span>
                            </div>
                            <p className="text-slate-400 text-sm mb-8 text-left h-10">
                                {plan.description}
                            </p>

                            <div className="space-y-4 w-full text-left flex-1 mb-8">
                                {plan.features.map((feature) => (
                                    <div key={feature} className="flex items-center gap-3 text-slate-300 text-sm group">
                                        <Check size={14} className={`shrink-0 ${plan.popular ? 'text-emerald-500' : 'text-slate-600'}`} />
                                        <span className="group-hover:text-white transition-colors">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <button className={`w-full py-4 rounded-lg font-bold font-mono text-sm tracking-wider transition-all
                ${plan.popular
                                    ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-500/20'
                                    : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
                                }`}>
                                {plan.cta}
                            </button>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
