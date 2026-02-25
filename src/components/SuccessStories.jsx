import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const stories = [
    {
        quote:
            "Handing over your LinkedIn account is a big deal, but Vaultcrest made it feel completely seamless. We got 20+ meetings with fashion brands and 6+ investor intros. Vaultcrest isn't just a lead gen agency; they're a growth partner.",
        name: 'Roopansh Sharma',
        title: 'Co-founder, Ailusion',
        stats: '20+ meetings | 6+ investor intros',
    },
];

export default function SuccessStories() {
    const titleRef = useRef(null);
    const titleInView = useInView(titleRef, { once: true, margin: '-100px' });

    return (
        <section id="stories" className="relative py-24 sm:py-32">
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
                        Success Stories
                    </span>
                    <h2 className="section-heading" style={{ color: 'var(--text-primary)' }}>
                        Results That <span className="text-gradient">Speak</span>
                    </h2>
                </motion.div>

                {/* Testimonial Cards */}
                <div className="max-w-3xl mx-auto">
                    {stories.map((story, i) => (
                        <StoryCard key={story.name} story={story} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function StoryCard({ story, index }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            className="glass-card-hover p-8 sm:p-10 relative overflow-hidden"
        >
            {/* Glow */}
            <div className="absolute -top-16 -right-16 w-40 h-40 bg-azure/10 rounded-full blur-3xl" />

            {/* Quote icon */}
            <Quote className="w-10 h-10 text-azure/20 mb-6" strokeWidth={1.5} />

            {/* Quote text */}
            <p
                className="text-lg sm:text-xl leading-relaxed mb-8 relative z-10"
                style={{ color: 'var(--text-primary)' }}
            >
                "{story.quote}"
            </p>

            {/* Stats badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-azure/10 mb-6">
                <Star className="w-4 h-4 text-azure" />
                <span className="text-sm font-bold text-azure">{story.stats}</span>
            </div>

            {/* Author */}
            <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-azure to-azure/50 flex items-center justify-center text-white font-bold text-lg">
                    {story.name.charAt(0)}
                </div>
                <div>
                    <div className="text-base font-bold" style={{ color: 'var(--text-primary)' }}>
                        {story.name}
                    </div>
                    <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                        {story.title}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
