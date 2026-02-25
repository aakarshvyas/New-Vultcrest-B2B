export default function VaultcrestLogo({ className = 'w-8 h-8' }) {
    return (
        <svg
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Background rounded square */}
            <rect
                x="2" y="2" width="36" height="36" rx="10"
                fill="url(#logoBg)"
                opacity="0.15"
            />
            <rect
                x="2" y="2" width="36" height="36" rx="10"
                stroke="url(#logoStroke)"
                strokeWidth="1.5"
                fill="none"
            />
            {/* Stylized V with upward growth arrow */}
            <path
                d="M11 12L20 28L25 18"
                stroke="url(#logoMain)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />
            <path
                d="M25 18L29 10"
                stroke="url(#logoMain)"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
            />
            {/* Arrow head on top-right */}
            <path
                d="M26 9L30 9L30 13.5"
                stroke="url(#logoMain)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />
            {/* Small dot accents — data points */}
            <circle cx="15" cy="20" r="1.5" fill="url(#logoMain)" opacity="0.5" />
            <circle cx="22" cy="14" r="1.5" fill="url(#logoMain)" opacity="0.35" />
            <defs>
                <linearGradient id="logoBg" x1="2" y1="2" x2="38" y2="38" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#007BFF" />
                    <stop offset="1" stopColor="#00D4FF" />
                </linearGradient>
                <linearGradient id="logoStroke" x1="2" y1="2" x2="38" y2="38" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#007BFF" stopOpacity="0.5" />
                    <stop offset="1" stopColor="#00D4FF" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="logoMain" x1="11" y1="28" x2="30" y2="9" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#007BFF" />
                    <stop offset="1" stopColor="#00D4FF" />
                </linearGradient>
            </defs>
        </svg>
    );
}
