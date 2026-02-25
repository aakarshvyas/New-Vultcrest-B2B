import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function useTheme() {
    return useContext(ThemeContext);
}

// mode: 'system' | 'light' | 'dark'
export function ThemeProvider({ children }) {
    const [mode, setMode] = useState(() => localStorage.getItem('themeMode') || 'system');

    // Resolve mode to actual theme
    const getResolved = (m) => {
        if (m === 'system') {
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        return m;
    };

    const [theme, setTheme] = useState(() => getResolved(mode));

    useEffect(() => {
        localStorage.setItem('themeMode', mode);
        setTheme(getResolved(mode));

        if (mode === 'system') {
            const mq = window.matchMedia('(prefers-color-scheme: dark)');
            const handler = (e) => setTheme(e.matches ? 'dark' : 'light');
            mq.addEventListener('change', handler);
            return () => mq.removeEventListener('change', handler);
        }
    }, [mode]);

    useEffect(() => {
        const root = document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(theme);
    }, [theme]);

    const cycleTheme = () => {
        setMode((prev) => {
            if (prev === 'dark') return 'light';
            if (prev === 'light') return 'system';
            return 'dark'; // system -> dark
        });
    };

    return (
        <ThemeContext.Provider value={{ theme, mode, cycleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
