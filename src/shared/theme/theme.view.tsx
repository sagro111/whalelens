import { createContext, ReactNode, useContext, useMemo, useState } from 'react';
import { ThemeProvider as ThemeProviderBase } from 'styled-components';

import { DARK_THEME, LIGHT_THEME } from './theme.constants.ts';
import { ApplicationTheme, ThemeName } from './types.ts';

type ContextValue = [name: ThemeName, setName: (newTheme: ThemeName) => void];

const DEFAULT_THEME_NAME: ThemeName = window.matchMedia?.('(prefers-color-scheme: dark)').matches
    ? ThemeName.Dark
    : ThemeName.Light;

const ThemeNameContext = createContext<ContextValue>([DEFAULT_THEME_NAME, () => undefined]);

const THEME_MAP: Record<ThemeName, ApplicationTheme> = {
    [ThemeName.Dark]: DARK_THEME,
    [ThemeName.Light]: LIGHT_THEME,
} as const;

export const ThemeProvide = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState(ThemeName.Light);

    const contextValue: ContextValue = useMemo(() => [theme, setTheme], [setTheme, theme]);

    return (
        <ThemeProviderBase theme={THEME_MAP[theme]}>
            <ThemeNameContext.Provider value={contextValue}>{children}</ThemeNameContext.Provider>
        </ThemeProviderBase>
    );
};

export const useTheme = () => {
    const handler = useContext(ThemeNameContext);

    if (handler === undefined) {
        throw new Error('useThemeNameContext must be used inside ThemeProvider');
    }

    return handler;
};
