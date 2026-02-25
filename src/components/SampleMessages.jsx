import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageSquare, Sparkles, User } from 'lucide-react';

const messages = [
    {
        name: 'Rehan',
        message:
            "Thanks for the add, Rehan. I was reading your profile and saw you grew the business by 30% in just two years. It is a level of experience that really speaks for itself and that's why I wanted to connect.",
        tags: ['Growth Insight', 'Profile-Based'],
    },
    {
        name: 'Praveen',
        message:
            "Hi Praveen, I noticed you have over 25 years of experience across completely different fields like F&B and pharma. Having that kind of range is very rare and that's why I wanted to connect.",
        tags: ['Cross-Industry', 'Experience-Based'],
    },
];

export default function SampleMessages() {
    const titleRef = useRef(null);
    const titleInView = useInView(titleRef, { once: true, margin: '-100px' });

    return (
        <section className="relative py-24 sm:py-32">
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
                        AI In Action
                    </span>
                    <h2 className="section-heading" style={{ color: 'var(--text-primary)' }}>
                        Sample <span className="text-gradient">Automated Personalized</span> Messages
                    </h2>
                    <p className="mt-4 text-base max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                        Every message our AI crafts is unique — built from real profile data, not templates. Here's what your prospects actually receive.
                    </p>
                </motion.div>

                {/* Message Cards */}
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
                    {messages.map((msg, i) => (
                        <MessageCard key={msg.name} msg={msg} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function MessageCard({ msg, index }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="glass-card-hover p-6 sm:p-8 flex flex-col relative overflow-hidden group"
        >
            {/* Glow accent */}
            <div className="absolute -top-10 -right-10 w-28 h-28 bg-azure/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Header */}
            <div className="flex items-center gap-3 mb-5 relative z-10">
                <div className="w-10 h-10 rounded-full bg-azure/10 flex items-center justify-center">
                    <User className="w-5 h-5 text-azure" />
                </div>
                <div>
                    <div className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>
                        Message to {msg.name}
                    </div>
                    <div className="flex items-center gap-1 mt-0.5">
                        <Sparkles className="w-3 h-3 text-azure" />
                        <span className="text-xs text-azure font-medium">AI-Generated</span>
                    </div>
                </div>
                <MessageSquare className="w-5 h-5 text-azure/30 ml-auto" />
            </div>

            {/* Message Body */}
            <div
                className="relative z-10 text-sm leading-relaxed flex-1 p-4 rounded-xl mb-4"
                style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-primary)',
                }}
            >
                <span className="text-azure font-medium">"</span>
                {msg.message}
                <span className="text-azure font-medium">"</span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 relative z-10">
                {msg.tags.map((tag) => (
                    <span
                        key={tag}
                        className="text-xs font-semibold px-3 py-1 rounded-full bg-azure/10 text-azure"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}
