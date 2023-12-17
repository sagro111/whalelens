export enum ThemeName {
    Light = 'light',
    Dark = 'dark',
}

export type ApplicationTheme = {
    mainBackgroundColor: string;
    defaultPadding: string;
    menuColor: string;
    textColor: string;
    iconColor: {
        primary: string;
        active: string;
    };
    shadow: {
        primary: string;
    };
    button: {
        primary: {
            backgroundColor: string;
            color: string;
        };
    };
};
