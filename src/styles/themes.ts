export type Theme = {
    name: string;
    BACKGROUND: string;
    TEXT: string;
    PRIMARY: string;
    SECONDARY: string;
    SIDENAV_BG: string;
    SIDENAV_TEXT: string;
    SUCCESS: string;
    WARNING: string;
    ERROR: string;
};

export const LIGHT_THEME: Theme = {
    name: 'light',
    BACKGROUND: '#ffffff',
    TEXT: '#000000',
    PRIMARY: '#0067FF',
    // SECONDARY: '#3e2ad6',
    SECONDARY: '#5533AA',
    SIDENAV_BG: '#f1f5f9',
    SIDENAV_TEXT: '#0f172a',
    SUCCESS: '#16a34a',
    WARNING: '#facc15',
    ERROR: '#dc2626',
};

export const DARK_THEME: Theme = {
    name: 'dark',
    BACKGROUND: '#0f172a',
    TEXT: '#f8fafc',
    PRIMARY: '#0067FF',
    SECONDARY: '',
    SIDENAV_BG: '#1e293b',
    SIDENAV_TEXT: '#f8fafc',
    SUCCESS: '#16a34a',
    WARNING: '#facc15',
    ERROR: '#dc2626',
};
