'use client';

import { ReactNode } from 'react';
import { clsx } from 'clsx';
import { Breadcrumbs } from './Breadcrumbs';
import { useTheme } from '@/context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa6';


interface HeaderProps {
    title?: ReactNode;
    useBreadcrumbs?: boolean;
    className?: string;
    routeNameMap?: Record<string, string>;
}

export const Header = ({ title, useBreadcrumbs = false, className, routeNameMap }: HeaderProps) => {
    const { theme, toggleTheme, isDark, } = useTheme();
    
    return (
        <header
            className={clsx(
                'sticky top-0 z-50 w-full px-4 py-3 shadow-sm flex flex-row items-center justify-between',
                className
            )}
            style={{
                backgroundColor: theme.BACKGROUND,
                color: theme.TEXT,
            }}
        >
            <div className="flex-1 text-xl font-semibold" style={{
                backgroundColor: theme.BACKGROUND,
                color: theme.TEXT
            }}>
                {useBreadcrumbs ? (
                    <Breadcrumbs routeNameMap={routeNameMap} />
                ) : (
                    <h1 className="text-lg font-semibold text-gray-800">{title}</h1>
                )}
            </div>
            <button onClick={toggleTheme}>
                {
                    isDark
                        ? <FaSun color={'#FFF'}  />
                        : <FaMoon color={'#000'} />
                }
            </button>
        </header>
    );
};
