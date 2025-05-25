/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import clsx from 'clsx';
import { useTheme } from '@/context/ThemeContext';
import { Skeleton } from '@/components/ui/Skeleton/Skeleton'; // adjust the import path

export type ViewType = 'smallGrid' | 'largeGrid' | 'list';

export interface CollectionLayoutProps<T> {
    items: T[];
    view: ViewType;
    onClick: (item: T) => void;
    renderGridItem: (item: T) => React.ReactElement;
    renderListItem: (item: T) => React.ReactElement;
    isLoading?: boolean;
}

export const CollectionLayout = <T,>({
    items,
    view,
    onClick,
    renderGridItem,
    renderListItem,
    isLoading = false
}: CollectionLayoutProps<T>): React.ReactElement => {
    const { theme } = useTheme();

    const getGridCols = () => {
        switch (view) {
            case 'smallGrid':
                return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3';
            case 'largeGrid':
                return 'grid-cols-1 md:grid-cols-2';
            case 'list':
                return 'grid-cols-1';
        }
    };

    const getSkeletons = () => {
        const count = view === 'list' ? 6 : view === 'largeGrid' ? 4 : 6;

        return Array.from({ length: count }, (_, i) => {
            if (view === 'list') {
                return (
                    <div
                        key={i}
                        className="flex flex-col justify-center rounded-lg overflow-hidden shadow p-4"
                        style={{ backgroundColor: theme.BACKGROUND }}
                    >
                        <Skeleton className="h-4 w-1/3 mb-2" />
                        <Skeleton className="h-4 w-2/3" />
                    </div>
                );
            }

            // For smallGrid and largeGrid
            const height = view === 'smallGrid' ? 'h-48' : 'h-64';

            return (
                <div
                    key={i}
                    className="rounded-lg overflow-hidden shadow"
                    style={{ backgroundColor: theme.BACKGROUND }}
                >
                    <Skeleton className={clsx(height, 'w-full')} />
                    <div className="p-4">
                        <Skeleton className="h-4 w-3/4 mb-2" />
                        <Skeleton className="h-4 w-1/2" />
                    </div>
                </div>
            );
        });
    };


    return (
        <div className={clsx('grid gap-6', getGridCols())}>
            {isLoading
                ? getSkeletons()
                : items.map((item, index) => (
                    <div
                        // @ts-ignore
                        key={(item as T).id ?? index}
                        onClick={() => onClick(item)}
                        className="rounded-lg overflow-hidden shadow transition hover:shadow-lg cursor-pointer"
                        style={{
                            backgroundColor: theme.BACKGROUND,
                            color: theme.TEXT,
                        }}
                    >
                        {view === 'list' ? renderListItem(item) : renderGridItem(item)}
                    </div>
                ))}
        </div>
    );

};
