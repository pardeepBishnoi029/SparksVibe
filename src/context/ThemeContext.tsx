import React, { createContext, useState, useEffect } from 'react';
import { saveData, getData } from '../utils/storage';
import { Themes } from '../config/themes';

type ThemeType = keyof typeof Themes;
interface ThemeContextType {
    theme: ThemeType;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: 'light',
    toggleTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<ThemeType>('light');

    useEffect(() => {
        const loadTheme = async () => {
            const savedTheme = await getData('THEME');
            if (savedTheme) setTheme(savedTheme);
        };
        loadTheme();
    }, []);

    const toggleTheme = async () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        await saveData('THEME', newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
