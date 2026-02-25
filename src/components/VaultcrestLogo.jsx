export default function VaultcrestLogo({ className = 'w-8 h-8' }) {
    return (
        <svg
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Outer shield shape */}
            <path
                d="M20 2L4 10V22C4 31.5 11 37 20 39C29 37 36 31.5 36 22V10L20 2Z"
                stroke="url(#logoGrad)"
                strokeWidth="2"
                fill="none"
            />
            {/* Inner vault door */}
            <circle
                cx="20"
                cy="20"
                r="9"
                stroke="url(#logoGrad)"
                strokeWidth="1.5"
                fill="none"
            />
            {/* Vault handle / crosshair */}
            <line x1="20" y1="14" x2="20" y2="26" stroke="url(#logoGrad)" strokeWidth="1.5" />
            <line x1="14" y1="20" x2="26" y2="20" stroke="url(#logoGrad)" strokeWidth="1.5" />
            {/* Center keyhole dot */}
            <circle cx="20" cy="20" r="2.5" fill="url(#logoGrad)" />
            {/* Corner accents */}
            <path d="M20 5L8 11.5" stroke="url(#logoGrad)" strokeWidth="1" opacity="0.4" />
            <path d="M20 5L32 11.5" stroke="url(#logoGrad)" strokeWidth="1" opacity="0.4" />
            <defs>
                <linearGradient id="logoGrad" x1="4" y1="2" x2="36" y2="39" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#007BFF" />
                    <stop offset="1" stopColor="#00D4FF" />
                </linearGradient>
            </defs>
        </svg>
    );
}
