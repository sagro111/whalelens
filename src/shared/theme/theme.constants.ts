import { ApplicationTheme } from './types.ts';

export const LIGHT_THEME: ApplicationTheme = {
    mainBackgroundColor: '#F8F9FA',
    defaultPadding: '1rem',
    menuColor: '#FFFFFF',
    textColor: '#212529',
    icon: {
        primary: '#6C757D',
        active: '#0063F5',
    },
    shadow: {
        primary: 'rgba(0, 0, 0, 0.15)',
    },
    button: {
        primary: {
            backgroundColor: '#FFFFFF',
            color: '#0063F5',
        },
    },
};

export const DARK_THEME: ApplicationTheme = {
    mainBackgroundColor: '#131313',
    defaultPadding: '1rem',
    menuColor: '#0D0D0D',
    textColor: '#D6DADE',
    icon: {
        primary: '#6C757D',
        active: '#0063F5',
    },
    shadow: {
        primary: 'rgba(0, 0, 0, 0.15)',
    },
    button: {
        primary: {
            backgroundColor: '#FFFFFF',
            color: '#0063F5',
        },
    },
};
