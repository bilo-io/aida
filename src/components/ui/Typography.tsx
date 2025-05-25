'use client'
import { useTheme } from '@/context/ThemeContext';
import React from 'react';
// import { ITheme, themes } from 'styles/themes';

export type IColorVariant = 'primary' | 'light' | 'accent' | 'secondary' | 'success' | 'warning' | 'error'
export type ISize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
export type IWeight = '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '100'


const getFontSize = (size: string) => {
    switch (size) {
        case 'xs': return '0.6rem';
        case 'sm': return '0.8rem';
        case 'md': return '1rem';
        case 'lg': return '1.25rem';
        case 'xl': return '1.5rem';
        case '2xl': return '2rem';
        case '3xl': return '2.5rem';
        case '4xl': return '3rem';
        default: return '1rem';
    }
};

interface TypographyProps {
    size?: ISize,
    weight?: IWeight,
    style?: React.CSSProperties,
    className?: string,
    color?: string,
    children: any,
    variant?: 'light' | 'dark',
    align?: 'left' | 'center' | 'right',
    onClick?: () => void,
}

export const Typography: React.FC<TypographyProps> = ({
    size,
    weight,
    style,
    className,
    variant,
    color,
    children,
    onClick,
    align = 'left',
    ...rest
}) => {
    const { name: themeName, theme } = useTheme();

    const getTextColor = (type: 'light' | 'dark') => {
        // const theme: ITheme = themes[themeName as ThemeName] as ITheme;
        // switch (type) {
        // case 'light': return light.TEXT
        // case 'dark': return dark.TEXT
        // default: return dark.TEXT
        // }
        return theme?.TEXT;
    };

    const textColor = variant
        ? getTextColor(variant)
        : color || getTextColor(themeName as 'light' | 'dark');

    return (
        <span
            className={className}
            style={{
                color: textColor,
                fontSize: size ? getFontSize(size) : '1rem',
                fontWeight: weight,
                textAlign: align,
                transition: 'all 0.25s ease-in-out',
                ...style,
            }}
            onClick={() => onClick?.()}
            {...rest}
        >
            {children}
        </span>
    );
};

export default Typography;
