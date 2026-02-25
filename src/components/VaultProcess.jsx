import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
    Crosshair,
    Plug,
    Flame,
    MessageSquare,
    RefreshCw,
    CalendarCheck,
} from 'lucide-react';

const steps = [
    {
        num: '01',
        icon: Crosshair,
        title: 'Discovery & Targeting',
        desc: 'We dissect your market. Your ICP. Your competitors\' weaknesses. We build laser-targeted prospect lists of decision-makers who need what you sell — not vague "leads."',
        accent: 'from-azure/20 to-azure/5',
    },
    {
        num: '02',
        icon: Plug,
        title: 'API Integration & Deployment',
        desc: 'We hardwire LinkedIn and email APIs into a unified outreach machine. Real-time data. Automated workflows. Zero manual touchpoints. Your infrastructure goes live in 48 hours.',
        accent: 'from-cyan-500/20 to-cyan-500/5',
    },
    {
        num: '03',
        icon: Flame,
        title: 'Domain & Inbox Warm-Up',
        desc: 'Before a single message leaves, we systematically warm your domains and inboxes. Reputation scores climb. Deliverability locks in at 98%+. Your messages land where they matter — the Primary inbox.',
        accent: 'from-orange-500/20 to-orange-500/5',
    },
    {
        num: '04',
        icon: MessageSquare,
        title: 'Hyper-Personalized Outreach',
        desc: 'AI doesn\'t send templates — it writes conversations. Every message is unique, referencing real prospect data, company context, and trigger events. It reads human because it understands humans.',
        accent: 'from-purple-500/20 to-purple-500/5',
    },
    {
        num: '05',
        icon: RefreshCw,
        title: 'Intelligent Follow-Up Engine',
        desc: 'Most deals close between touchpoints 3 and 7. Our AI engine manages multi-touch follow-up sequences with perfect timing, context-aware callbacks, and automated lead scoring — no prospect falls through the cracks.',
        accent: 'from-emerald-500/20 to-emerald-500/5',
    },
    {
        num: '06',
        icon: CalendarCheck,
        title: 'Qualified Appointments — Delivered',
        desc: 'The finish line. Sales-ready meetings land directly on your calendar. Pre-qualified. Pre-informed. Ready to close. You show up and sell — we handle everything else.',
        accent: 'from-azure/20 to-azure/5',
    },
];

export default function VaultProcess() {
    const titleRef = useRef(null);
    const titleInView = useInView(titleRef, { once: true, margin: '-100px' });

    return (
        <section id="process" className="relative py-24 sm:py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    ref={titleRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={titleInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <span className="text-azure text-sm font-bold uppercase tracking-[0.2em] mb-4 block">
                        The Blueprint
                    </span>
                    <h2 className="section-heading" style={{ color: 'var(--text-primary)' }}>
                        The 6-Step{' '}
                        <span className="text-gradient">Vault Process</span>
                    </h2>
                    <p className="mt-4 text-base max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                        From zero to qualified appointments on your calendar. A systematic, AI-driven engine that eliminates guesswork and delivers results.
                    </p>
                </motion.div>

                {/* Horizontal Scroll Cards */}
                <div className="process-scroll px-2">
                    {steps.map((step, i) => (
                        <ProcessCard key={step.num} step={step} index={i} />
                    ))}
                </div>

                {/* Scroll Hint */}
                <div className="flex items-center justify-center mt-6 gap-2" style={{ color: 'var(--text-secondary)' }}>
                    <motion.div
                        animate={{ x: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="text-sm font-medium"
                    >
                        Swipe to explore →
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function ProcessCard({ step, index }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="process-card glass-card-hover p-6 sm:p-8 flex flex-col relative overflow-hidden group"
        >
            {/* Background gradient */}
            <div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${step.accent} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
            />

            {/* Step number */}
            <span className="text-5xl font-black text-azure/10 absolute top-4 right-4 select-none">
                {step.num}
            </span>

            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-azure/10 flex items-center justify-center mb-5 relative z-10">
                <step.icon className="w-6 h-6 text-azure" strokeWidth={1.5} />
            </div>

            {/* Content */}
            <h3 className="text-lg font-bold mb-3 relative z-10" style={{ color: 'var(--text-primary)' }}>
                {step.title}
            </h3>
            <p className="text-sm leading-relaxed relative z-10 flex-1" style={{ color: 'var(--text-secondary)' }}>
                {step.desc}
            </p>

            {/* Progress bar at bottom */}
            <div className="mt-6 h-1 rounded-full overflow-hidden relative z-10" style={{ background: 'var(--border-color)' }}>
                <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${((index + 1) / 6) * 100}%` } : {}}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    className="h-full bg-gradient-to-r from-azure to-azure/60 rounded-full"
                />
            </div>
        </motion.div>
    );
}
