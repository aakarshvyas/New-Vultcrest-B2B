import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { DollarSign, TrendingUp, Calculator, ArrowRight } from 'lucide-react';

export default function LeadCalculator() {
    const [dealValue, setDealValue] = useState(25000);
    const [monthlyDeals, setMonthlyDeals] = useState(5);

    const titleRef = useRef(null);
    const titleInView = useInView(titleRef, { once: true, margin: '-100px' });

    const currentRevenue = dealValue * monthlyDeals;
    const projectedMultiplier = 2.5;
    const projectedRevenue = currentRevenue * projectedMultiplier;
    const revenueGain = projectedRevenue - currentRevenue;

    const dealValuePercent = ((dealValue - 5000) / (500000 - 5000)) * 100;
    const monthlyDealsPercent = ((monthlyDeals - 1) / (50 - 1)) * 100;

    return (
        <section id="calculator" className="relative py-24 sm:py-32">
            {/* Background accent */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-azure/[0.02] to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    ref={titleRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={titleInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <span className="text-azure text-sm font-bold uppercase tracking-[0.2em] mb-4 block">
                        See Your ROI
                    </span>
                    <h2 className="section-heading" style={{ color: 'var(--text-primary)' }}>
                        The <span className="text-gradient">Lead Calculator</span>
                    </h2>
                    <p className="mt-4 text-base max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                        Slide the numbers. See what Vaultcrest can do for your bottom line.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    {/* Input Panel */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={titleInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="glass-card-hover p-8 sm:p-10"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-xl bg-azure/10 flex items-center justify-center">
                                <Calculator className="w-5 h-5 text-azure" />
                            </div>
                            <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                                Your Numbers
                            </h3>
                        </div>

                        {/* Deal Value Slider */}
                        <div className="mb-8">
                            <div className="flex justify-between items-center mb-3">
                                <label className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                                    Average Deal Value
                                </label>
                                <span className="text-lg font-bold text-azure">
                                    ${dealValue.toLocaleString()}
                                </span>
                            </div>
                            <input
                                type="range"
                                min="5000"
                                max="500000"
                                step="5000"
                                value={dealValue}
                                onChange={(e) => setDealValue(Number(e.target.value))}
                                className="w-full"
                                style={{ '--value': `${dealValuePercent}%` }}
                            />
                            <div className="flex justify-between mt-2">
                                <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>$5K</span>
                                <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>$500K</span>
                            </div>
                        </div>

                        {/* Monthly Deals Slider */}
                        <div className="mb-8">
                            <div className="flex justify-between items-center mb-3">
                                <label className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                                    Monthly Deals Closed
                                </label>
                                <span className="text-lg font-bold text-azure">
                                    {monthlyDeals}
                                </span>
                            </div>
                            <input
                                type="range"
                                min="1"
                                max="50"
                                step="1"
                                value={monthlyDeals}
                                onChange={(e) => setMonthlyDeals(Number(e.target.value))}
                                className="w-full"
                                style={{ '--value': `${monthlyDealsPercent}%` }}
                            />
                            <div className="flex justify-between mt-2">
                                <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>1</span>
                                <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>50</span>
                            </div>
                        </div>

                        {/* Current Revenue */}
                        <div className="p-4 rounded-xl" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
                            <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--text-secondary)' }}>
                                Current Monthly Revenue
                            </div>
                            <div className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                                ${currentRevenue.toLocaleString()}
                            </div>
                        </div>
                    </motion.div>

                    {/* Results Panel */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={titleInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="glass-card-hover p-8 sm:p-10 relative overflow-hidden"
                    >
                        {/* Glow effect */}
                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-azure/20 rounded-full blur-3xl" />

                        <div className="flex items-center gap-3 mb-8 relative z-10">
                            <div className="w-10 h-10 rounded-xl bg-azure/10 flex items-center justify-center">
                                <TrendingUp className="w-5 h-5 text-azure" />
                            </div>
                            <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                                With Vaultcrest
                            </h3>
                        </div>

                        <div className="space-y-6 relative z-10">
                            {/* Projected Revenue */}
                            <div>
                                <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--text-secondary)' }}>
                                    Projected Monthly Revenue
                                </div>
                                <div className="text-4xl sm:text-5xl font-black text-gradient">
                                    ${projectedRevenue.toLocaleString()}
                                </div>
                            </div>

                            {/* Revenue Gain */}
                            <div className="p-5 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                                <div className="flex items-center gap-2 mb-1">
                                    <DollarSign className="w-4 h-4 text-emerald-400" />
                                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                                        Additional Revenue
                                    </span>
                                </div>
                                <div className="text-3xl font-bold text-emerald-400">
                                    +${revenueGain.toLocaleString()}/mo
                                </div>
                            </div>

                            {/* Multiplier */}
                            <div className="flex items-center gap-4">
                                <div className="flex-1 p-4 rounded-xl text-center" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
                                    <div className="text-2xl font-bold text-azure">{projectedMultiplier}x</div>
                                    <div className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>Pipeline Growth</div>
                                </div>
                                <div className="flex-1 p-4 rounded-xl text-center" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
                                    <div className="text-2xl font-bold text-azure">150%</div>
                                    <div className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>ROI Increase</div>
                                </div>
                            </div>

                            {/* CTA */}
                            <a
                                href="https://cal.com/vaultcrest"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glow-button w-full flex items-center justify-center gap-2 text-base mt-4"
                            >
                                Secure My Growth Audit
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
