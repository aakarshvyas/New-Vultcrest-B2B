import { Mail, Linkedin, MapPin, ArrowUpRight, Calendar } from 'lucide-react';
import VaultcrestLogo from './VaultcrestLogo';

const CAL_LINK = 'https://cal.com/pratham.singh/30min';

export default function Footer() {
    return (
        <footer className="relative py-16 sm:py-20 border-t" style={{ borderColor: 'var(--border-color)' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
                    {/* Brand */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <a href="#" className="flex items-center gap-2 mb-4 group">
                            <VaultcrestLogo className="w-7 h-7" />
                            <span className="text-lg font-bold tracking-tight">
                                <span className="text-gradient">Vault</span>
                                <span style={{ color: 'var(--text-primary)' }}>crest</span>
                            </span>
                        </a>
                        <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                            AI-Powered B2B Lead Generation. Turning cold outreach into gold for growth-obsessed companies worldwide.
                        </p>

                        {/* Contact Details */}
                        <div className="space-y-3 mb-6">
                            <div className="flex items-start gap-2">
                                <MapPin className="w-4 h-4 text-azure mt-0.5 flex-shrink-0" />
                                <span className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                                    9th Floor, Tower D, Unitech Cyber Park, Gurugram
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-azure flex-shrink-0" />
                                <a
                                    href="mailto:aakarsh@vaultcrest.net"
                                    className="text-xs hover:text-azure transition-colors"
                                    style={{ color: 'var(--text-secondary)' }}
                                >
                                    aakarsh@vaultcrest.net
                                </a>
                            </div>
                        </div>

                        {/* Social */}
                        <div className="flex items-center gap-3">
                            <a
                                href="https://www.linkedin.com/company/vaultcrest"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-xl glass-card flex items-center justify-center hover:border-azure/40 transition-all group"
                            >
                                <Linkedin className="w-4 h-4 group-hover:text-azure transition-colors" style={{ color: 'var(--text-secondary)' }} />
                            </a>
                            <a
                                href="mailto:aakarsh@vaultcrest.net"
                                className="w-10 h-10 rounded-xl glass-card flex items-center justify-center hover:border-azure/40 transition-all group"
                            >
                                <Mail className="w-4 h-4 group-hover:text-azure transition-colors" style={{ color: 'var(--text-secondary)' }} />
                            </a>
                            <a
                                href={CAL_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-xl glass-card flex items-center justify-center hover:border-azure/40 transition-all group"
                            >
                                <Calendar className="w-4 h-4 group-hover:text-azure transition-colors" style={{ color: 'var(--text-secondary)' }} />
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: 'var(--text-primary)' }}>
                            Services
                        </h4>
                        <ul className="space-y-3">
                            {['AI-Omni Outreach', 'Google Ads Management', 'LinkedIn Automation', 'Email Campaigns', 'Lead Scoring'].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#services"
                                        className="text-sm hover:text-azure transition-colors flex items-center gap-1 group"
                                        style={{ color: 'var(--text-secondary)' }}
                                    >
                                        {item}
                                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: 'var(--text-primary)' }}>
                            Company
                        </h4>
                        <ul className="space-y-3">
                            {['About Us', 'Case Studies', 'Our Process', 'Careers', 'Blog'].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="text-sm hover:text-azure transition-colors flex items-center gap-1 group"
                                        style={{ color: 'var(--text-secondary)' }}
                                    >
                                        {item}
                                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact / CTA */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: 'var(--text-primary)' }}>
                            Ready to Scale?
                        </h4>
                        <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
                            Book your free growth audit and discover the revenue you're leaving on the table.
                        </p>
                        <a
                            href={CAL_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glow-button inline-flex items-center gap-2 text-sm px-5 py-2.5"
                        >
                            Schedule a Meeting
                            <Calendar className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: 'var(--border-color)' }}>
                    <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                        © {new Date().getFullYear()} Vaultcrest Solutions. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        {['Privacy Policy', 'Terms of Service'].map((item) => (
                            <a key={item} href="#" className="text-xs hover:text-azure transition-colors" style={{ color: 'var(--text-secondary)' }}>
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
