import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        if (theme === 'dark') {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <button 
            onClick={toggleTheme} 
            style={{
                position: 'fixed',
                bottom: '2rem',
                left: '2rem',
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: 'var(--accent-color)',
                color: '#fff',
                border: 'none',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 9999,
                fontSize: '1.25rem',
                transition: 'all 0.3s ease'
            }}
            aria-label="Toggle Theme"
        >
            {theme === 'light' ? '🌙' : '☀️'}
        </button>
    );
};

export default ThemeToggle;
