import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Menu, X, Sun, Moon, Shield } from 'lucide-react';

const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Results', href: '#trust' },
];

export default function Navbar() {
    const { isDark, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'glass-card border-b shadow-lg shadow-black/10'
                : 'bg-transparent'
                }`}
            style={{
                borderRadius: 0,
                borderLeft: 'none',
                borderRight: 'none',
                borderTop: 'none',
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2 group">
                        <div className="relative">
                            <Shield className="w-8 h-8 text-azure" strokeWidth={2} />
                            <div className="absolute inset-0 bg-azure/20 rounded-full blur-md group-hover:bg-azure/30 transition-all" />
                        </div>
                        <span className="text-xl font-bold tracking-tight">
                            <span className="text-gradient">Vault</span>
                            <span style={{ color: 'var(--text-primary)' }}>crest</span>
                        </span>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map(link => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium transition-colors hover:text-azure"
                                style={{ color: 'var(--text-secondary)' }}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Right Side */}
                    <div className="flex items-center gap-3">
                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg transition-all hover:bg-azure/10"
                            aria-label="Toggle theme"
                        >
                            {isDark ? (
                                <Sun className="w-5 h-5 text-yellow-400" />
                            ) : (
                                <Moon className="w-5 h-5 text-slate-600" />
                            )}
                        </button>

                        {/* Desktop CTA */}
                        <a href="https://cal.com/pratham.singh/30min" target="_blank" rel="noopener noreferrer" className="hidden md:block glow-button text-sm px-5 py-2.5">
                            Schedule a Meeting
                        </a>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 rounded-lg hover:bg-azure/10 transition-all"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? (
                                <X className="w-6 h-6" style={{ color: 'var(--text-primary)' }} />
                            ) : (
                                <Menu className="w-6 h-6" style={{ color: 'var(--text-primary)' }} />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden glass-card border-t"
                        style={{ borderRadius: 0 }}
                    >
                        <div className="px-4 py-6 space-y-4">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    onClick={() => setIsOpen(false)}
                                    className="block text-base font-medium py-2 transition-colors hover:text-azure"
                                    style={{ color: 'var(--text-primary)' }}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <a
                                href="https://cal.com/pratham.singh/30min"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsOpen(false)}
                                className="glow-button block text-center text-sm mt-4"
                            >
                                Secure My Growth Audit
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
