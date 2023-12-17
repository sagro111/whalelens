import { ReactNode } from 'react';

export type ScreenId = 'home' | 'lenses' | 'profile' | 'news';

export type Screen = {
    label: string;
    id: ScreenId;
    icon: ReactNode;
};
