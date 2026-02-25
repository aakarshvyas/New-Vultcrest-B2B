import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Linkedin, Target, Search, BarChart3, TrendingDown } from 'lucide-react';

function ServiceCard({ icon: Icon, title, subtitle, features, accent, delay }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay }}
            className="glass-card-hover p-8 sm:p-10 flex flex-col h-full"
        >
            {/* Icon */}
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${accent}`}>
                <Icon className="w-7 h-7 text-azure" strokeWidth={1.5} />
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                {title}
            </h3>

            {/* Subtitle */}
            <p className="text-sm mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {subtitle}
            </p>

            {/* Features */}
            <div className="space-y-4 mt-auto">
                {features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                        <div className="mt-1 w-5 h-5 rounded-full bg-azure/10 flex items-center justify-center flex-shrink-0">
                            <feature.icon className="w-3 h-3 text-azure" />
                        </div>
                        <div>
                            <div className="text-sm font-semibold mb-0.5" style={{ color: 'var(--text-primary)' }}>
                                {feature.title}
                            </div>
                            <div className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                                {feature.desc}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}

export default function Services() {
    const titleRef = useRef(null);
    const titleInView = useInView(titleRef, { once: true, margin: '-100px' });

    return (
        <section id="services" className="relative py-24 sm:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    ref={titleRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={titleInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16 sm:mb-20"
                >
                    <span className="text-azure text-sm font-bold uppercase tracking-[0.2em] mb-4 block">
                        Our Arsenal
                    </span>
                    <h2 className="section-heading" style={{ color: 'var(--text-primary)' }}>
                        The <span className="text-gradient">"Vault"</span> Advantage
                    </h2>
                    <p className="mt-4 text-base max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                        Two battle-tested systems working in tandem to dominate your market — filling your pipeline with Decision Makers, not tire-kickers.
                    </p>
                </motion.div>

                {/* Service Cards */}
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                    <ServiceCard
                        icon={Mail}
                        title="AI-Omni Outreach"
                        subtitle="Intelligent LinkedIn & Email API automation that delivers hyper-personalized messages to your ideal prospects — at scale, while you sleep."
                        accent="bg-azure/10"
                        delay={0.1}
                        features={[
                            {
                                icon: Linkedin,
                                title: 'LinkedIn + Email API Fusion',
                                desc: 'Unified multi-channel campaigns powered by real-time API data. No manual work.',
                            },
                            {
                                icon: Target,
                                title: 'Hyper-Personalized at Scale',
                                desc: 'AI crafts unique, 1-to-1 messages for every prospect using live company & intent data.',
                            },
                            {
                                icon: Mail,
                                title: '100% Inbox Placement',
                                desc: 'Advanced warm-up, domain health monitoring, and deliverability protocols guarantee your messages land.',
                            },
                        ]}
                    />

                    <ServiceCard
                        icon={Search}
                        title="High-Intent Google Ads"
                        subtitle="Capture B2B buyers at the exact moment they're searching for solutions like yours — AI-optimized for maximum ROI."
                        accent="bg-azure/10"
                        delay={0.3}
                        features={[
                            {
                                icon: Search,
                                title: 'Peak Search Intent Capture',
                                desc: 'Target decision-makers actively searching for your solution. No cold audiences.',
                            },
                            {
                                icon: BarChart3,
                                title: 'AI-Optimized Bidding',
                                desc: 'Machine learning constantly optimizes your spend to drive qualified leads at the lowest CPL.',
                            },
                            {
                                icon: TrendingDown,
                                title: 'Lowest CPL Guaranteed',
                                desc: 'Our AI eliminates wasted spend, ensuring every dollar works harder than your competitors\'.',
                            },
                        ]}
                    />
                </div>
            </div>
        </section>
    );
}
