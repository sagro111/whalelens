import { ReactNode } from 'react';

import { ThemeProvide } from '@/shared/theme';
import { ScreenId } from '@/shared/ui/menu';
import { ScreensWidget } from '@/widgets/screens';

import { GlobalStyles } from './app.styled.ts';

const SCREENS: Record<ScreenId, ReactNode> = {
    home: 'Home',
    news: 'News',
    lenses: 'Lemnses',
    profile: 'profile',
};

export const App = () => (
    <ThemeProvide>
        <GlobalStyles />
        <ScreensWidget screens={SCREENS} />
    </ThemeProvide>
);
