import { motion } from 'framer-motion';
import { ArrowRight, Zap, Users, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';

function AnimatedCounter({ target, suffix = '', prefix = '' }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = target;
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [target]);

    return (
        <span>
            {prefix}{count.toLocaleString()}{suffix}
        </span>
    );
}

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Gradient Orbs */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-azure/10 rounded-full blur-[120px] animate-float" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-azure/5 rounded-full blur-[100px] animate-float" style={{ animationDelay: '3s' }} />

            {/* Vault Door Graphic */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    className="relative w-[500px] h-[500px]"
                >
                    {/* Outer ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-azure/20 animate-spin" style={{ animationDuration: '30s' }} />
                    <div className="absolute inset-4 rounded-full border border-azure/10 animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }} />

                    {/* Inner vault */}
                    <div className="absolute inset-12 rounded-full glass-card flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-azure/10 to-transparent" />
                        {/* Vault lines */}
                        <svg viewBox="0 0 200 200" className="w-full h-full p-16 opacity-30">
                            <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-azure" />
                            <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-azure" />
                            <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-azure" />
                            <line x1="100" y1="20" x2="100" y2="180" stroke="currentColor" strokeWidth="0.5" className="text-azure" />
                            <line x1="20" y1="100" x2="180" y2="100" stroke="currentColor" strokeWidth="0.5" className="text-azure" />
                            <line x1="43" y1="43" x2="157" y2="157" stroke="currentColor" strokeWidth="0.3" className="text-azure" />
                            <line x1="157" y1="43" x2="43" y2="157" stroke="currentColor" strokeWidth="0.3" className="text-azure" />
                        </svg>
                        <div className="absolute w-4 h-4 bg-azure rounded-full animate-glow-pulse" />
                    </div>

                    {/* Floating data points */}
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-azure/40 rounded-full"
                            style={{
                                top: `${20 + Math.random() * 60}%`,
                                left: `${20 + Math.random() * 60}%`,
                            }}
                            animate={{
                                opacity: [0.2, 0.8, 0.2],
                                scale: [0.8, 1.2, 0.8],
                            }}
                            transition={{
                                duration: 2 + Math.random() * 2,
                                repeat: Infinity,
                                delay: i * 0.5,
                            }}
                        />
                    ))}
                </motion.div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-3xl">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
                    >
                        <Zap className="w-4 h-4 text-azure" />
                        <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>
                            AI-Powered Growth Engine
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6"
                    >
                        Turn Cold Outreach{' '}
                        <span className="text-gradient">Into Gold.</span>
                        <br />
                        <span className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 block" style={{ color: 'var(--text-secondary)' }}>
                            AI-Powered Lead Gen That Scales With Your Ambition.
                        </span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-base sm:text-lg lg:text-xl max-w-2xl mb-10 leading-relaxed"
                        style={{ color: 'var(--text-secondary)' }}
                    >
                        Vaultcrest combines intelligent API-driven outreach and high-intent Google Ads to fill your calendar with qualified B2B appointments.{' '}
                        <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>No fluff. Just revenue.</span>
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <a href="https://cal.com/pratham.singh/30min" target="_blank" rel="noopener noreferrer" className="glow-button text-center flex items-center justify-center gap-2 text-base">
                            Secure My Growth Audit
                            <ArrowRight className="w-5 h-5" />
                        </a>
                        <a
                            href="#process"
                            className="px-8 py-3.5 rounded-xl border text-center font-semibold transition-all hover:border-azure/50 hover:bg-azure/5"
                            style={{
                                borderColor: 'var(--border-color)',
                                color: 'var(--text-primary)',
                            }}
                        >
                            See How It Works
                        </a>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                        className="flex flex-wrap gap-8 sm:gap-12 mt-16 pt-8 border-t"
                        style={{ borderColor: 'var(--border-color)' }}
                    >
                        {[
                            { icon: TrendingUp, value: 12847, suffix: '+', label: 'Leads Generated' },
                            { icon: Users, value: 150, suffix: '+', label: 'B2B Clients' },
                            { icon: Zap, value: 94, suffix: '%', label: 'Inbox Placement' },
                        ].map((stat) => (
                            <div key={stat.label} className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-azure/10">
                                    <stat.icon className="w-5 h-5 text-azure" />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                                        <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                                    </div>
                                    <div className="text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>
                                        {stat.label}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
