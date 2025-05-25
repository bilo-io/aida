'use client';

import { ReactNode, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { clsx } from 'clsx';
import { useTheme } from '@/context/ThemeContext';

interface Tab {
    label: ReactNode;
    value: string;
    view: ReactNode;
}

interface TabsProps {
    tabs: Tab[];
    initialIndex?: number;
    className?: string;
    useUrl?: boolean;
}

export const Tabs = ({ tabs, initialIndex = 0, className, useUrl = false }: TabsProps) => {
    // const router = useRouter();
    const searchParams = useSearchParams();
    const { theme } = useTheme();

    const getInitialIndexFromUrl = (): number => {
        const tabValue = searchParams?.get('tab');
        const foundIndex = tabs.findIndex(tab => tab.value === tabValue);
        return foundIndex !== -1 ? foundIndex : initialIndex;
    };

    const [activeIndex, setActiveIndex] = useState(() =>
        useUrl ? getInitialIndexFromUrl() : initialIndex
    );

    useEffect(() => {
        if (!useUrl) return;
        const tabValue = tabs[activeIndex]?.value;
        const newUrl = new URL(window.location.href);
        newUrl.searchParams.set('tab', tabValue);
        window.history.replaceState({}, '', newUrl.toString());
    }, [activeIndex, useUrl, tabs]);

    return (
        <div className={clsx('w-full', className)}>
            {/* Tab Headers */}
            <div className="flex border-b border-gray-300">
                {tabs.map((tab, index) => {
                    const isActive = index === activeIndex;
                    return (
                        <button
                            key={tab.value}
                            onClick={() => setActiveIndex(index)}
                            className={clsx(
                                'px-4 py-2 -mb-px transition-colors border-b-2',
                                isActive
                                    ? 'font-medium'
                                    : 'border-transparent text-gray-500 hover:text-gray-700'
                            )}
                            style={
                                isActive
                                    ? {
                                        color: theme.PRIMARY,
                                        borderBottomColor: theme.PRIMARY,
                                        borderBottomWidth: '2px',
                                    }
                                    : {}
                            }
                        >
                            {tab.label}
                        </button>
                    );
                })}
            </div>

            {/* Active Tab Content */}
            <div className="pt-4">{tabs[activeIndex]?.view}</div>
        </div>
    );
};
