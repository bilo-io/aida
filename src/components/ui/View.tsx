'use client'
import { useTheme } from '@/context/ThemeContext';
import React from 'react';

interface ViewProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
    isPage?: boolean;
    isPageContent?: boolean;
    flex?: boolean;
    flexRow?: boolean;
    flexCol?: boolean;
    flexWrap?: 'wrap' | 'wrap-reverse';
    justify?: 'between' | 'around' | 'start' | 'center' | 'end' | null;
    items?: 'start' | 'end' | 'center' | null;
}

// Use forwardRef to allow refs to be passed to the component
export const View = React.forwardRef<HTMLDivElement, ViewProps>(({
    children,
    className,
    style,
    isPage,
    isPageContent,
    flex,
    flexRow,
    flexCol,
    flexWrap,
    justify,
    items: alignItems,
    ...props
}, ref) => {
    const { theme } = useTheme();
    const themeName = theme.name;

    return (
        <div
            ref={ref} // Attach the ref to the div
            style={style}
            className={
                `${isPage ? `page ${themeName}` : ''}
                ${isPageContent ? `page-content ${themeName}` : ''}
                ${flex ? 'flex' : ''}
                ${flexRow ? 'flex flex-row' : ''}
                ${flexCol ? 'flex flex-col' : ''}
                ${flexWrap ? `flex-${flexWrap}` : ''}
                ${justify ? `justify-${justify}` : ''}
                ${alignItems ? `items-${alignItems}` : ''}
                ${className || ''}`.trim()
            }
            {...props} // Spread other props like onClick, etc.
        >
            {children}
        </div>
    );
});

// Optional: Give the component a display name for better debugging
View.displayName = 'View';

export default View;
