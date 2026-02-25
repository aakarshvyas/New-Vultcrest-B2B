import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Activity } from 'lucide-react';

const logos = [
    'TechFlow', 'ScaleUp', 'DataBridge', 'CloudNine', 'NextWave',
    'PivotAI', 'GrowthX', 'Nexgen', 'Stratify', 'VelocityB2B',
];

function AnimatedNumber({ target }) {
    const [value, setValue] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;
        let start = 0;
        const duration = 2500;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                setValue(target);
                clearInterval(timer);
            } else {
                setValue(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [isInView, target]);

    return <span ref={ref}>{value.toLocaleString()}</span>;
}

export default function TrustSection() {
    const titleRef = useRef(null);
    const titleInView = useInView(titleRef, { once: true, margin: '-100px' });

    return (
        <section id="trust" className="relative py-24 sm:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    ref={titleRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={titleInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <span className="text-azure text-sm font-bold uppercase tracking-[0.2em] mb-4 block">
                        Proof, Not Promises
                    </span>
                    <h2 className="section-heading" style={{ color: 'var(--text-primary)' }}>
                        Trusted by <span className="text-gradient">Growth-Obsessed</span> Teams
                    </h2>
                </motion.div>

                {/* Logo Marquee */}
                <div className="marquee-container mb-16 py-6">
                    <div className="marquee-content">
                        {[...logos, ...logos].map((logo, i) => (
                            <div
                                key={i}
                                className="flex-shrink-0 mx-8 sm:mx-12 glass-card px-8 py-4 flex items-center justify-center"
                                style={{ minWidth: '160px' }}
                            >
                                <span
                                    className="text-lg font-bold tracking-tight"
                                    style={{ color: 'var(--text-secondary)' }}
                                >
                                    {logo}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Live Data Ticker */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={titleInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-6"
                >
                    {/* Total Leads */}
                    <div className="glass-card-hover p-8 text-center relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-azure to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="flex items-center justify-center gap-2 mb-3">
                            <TrendingUp className="w-5 h-5 text-azure" />
                            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>
                                Total Leads Generated
                            </span>
                        </div>
                        <div className="text-4xl sm:text-5xl font-black text-gradient">
                            <AnimatedNumber target={5000} /><span className="text-gradient">+</span>
                        </div>
                        <div className="mt-2 flex items-center justify-center gap-1">
                            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="text-xs font-medium text-emerald-400">Live</span>
                        </div>
                    </div>

                    {/* Active Campaigns */}
                    <div className="glass-card-hover p-8 text-center relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-azure to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="flex items-center justify-center gap-2 mb-3">
                            <Activity className="w-5 h-5 text-azure" />
                            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>
                                Campaigns Created
                            </span>
                        </div>
                        <div className="text-4xl sm:text-5xl font-black text-gradient">
                            <AnimatedNumber target={200} /><span className="text-gradient">+</span>
                        </div>
                        <div className="mt-2 flex items-center justify-center gap-1">
                            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="text-xs font-medium text-emerald-400">Live</span>
                        </div>
                    </div>

                    {/* Inbox Placement */}
                    <div className="glass-card-hover p-8 text-center relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-azure to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="flex items-center justify-center gap-2 mb-3">
                            <TrendingUp className="w-5 h-5 text-azure" />
                            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>
                                Inbox Placement
                            </span>
                        </div>
                        <div className="text-4xl sm:text-5xl font-black text-gradient">
                            <AnimatedNumber target={98} />
                            <span className="text-gradient">%</span>
                        </div>
                        <div className="mt-2 flex items-center justify-center gap-1">
                            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="text-xs font-medium text-emerald-400">Guaranteed</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
