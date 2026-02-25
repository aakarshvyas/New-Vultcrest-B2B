import { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function DataStream() {
    const canvasRef = useRef(null);
    const { isDark } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        const particles = [];
        const particleCount = 80;

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 2 + 0.5,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: Math.random() * 0.8 + 0.2,
                opacity: Math.random() * 0.5 + 0.1,
            });
        }

        let animationId;
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((p, i) => {
                p.x += p.speedX;
                p.y += p.speedY;

                if (p.y > canvas.height) {
                    p.y = -10;
                    p.x = Math.random() * canvas.width;
                }
                if (p.x < 0 || p.x > canvas.width) {
                    p.x = Math.random() * canvas.width;
                }

                // Draw particle
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = isDark
                    ? `rgba(0, 123, 255, ${p.opacity})`
                    : `rgba(0, 123, 255, ${p.opacity * 0.6})`;
                ctx.fill();

                // Connect nearby particles
                particles.forEach((p2, j) => {
                    if (i === j) return;
                    const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
                    if (dist < 120) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = isDark
                            ? `rgba(0, 123, 255, ${0.08 * (1 - dist / 120)})`
                            : `rgba(0, 123, 255, ${0.04 * (1 - dist / 120)})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                });
            });

            animationId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', resize);
        };
    }, [isDark]);

    return (
        <canvas
            ref={canvasRef}
            className="data-stream-canvas"
        />
    );
}
