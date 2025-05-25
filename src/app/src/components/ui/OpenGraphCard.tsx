import React, { useEffect, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import {Skeleton } from '@/components/ui/Skeleton/Skeleton'

interface OpenGraphData {
    title: string;
    description?: string;
    image?: string;
    url: string;
}

interface OpenGraphCardProps {
    date?: string;
    url: string;
}

// Utility: Fetch OpenGraph data from API
async function fetchOpenGraphData(url: string): Promise<OpenGraphData | null> {
    try {
        const response = await fetch(`/api/opengraph?url=${encodeURIComponent(url)}`);
        if (!response.ok) throw new Error('Failed to fetch OpenGraph data');
        const data = await response.json();
        return {
            title: data.title || url,
            description: data.description || '',
            image: data.image || '',
            url,
        };
    } catch (error) {
        console.error('Error fetching OpenGraph data:', error);
        return null;
    }
}

export const OpenGraphCard: React.FC<OpenGraphCardProps> = ({ url, date }) => {
    const { theme } = useTheme();
    const [data, setData] = useState<OpenGraphData | null>(null);

    useEffect(() => {
        fetchOpenGraphData(url).then(setData);
    }, [url]);

    if (!data) return (
        <Skeleton className="w-full h-full" />
    );

    return (
        <a
            href={data.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative rounded-lg overflow-hidden group transition-transform transform hover:scale-[1.01] block shadow-md min-h-52"
            style={{
                backgroundColor: theme.BACKGROUND,
                color: theme.TEXT,
            }}
        >
            {/* Background Image */}
            {data.image && (
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${data.image})`,
                        zIndex: 0,
                    }}
                />
            )}

            {/* Overlay */}
            <div
                className="absolute inset-0 z-10 pointer-events-none"
            >
                <div
                    className="h-full w-full transition-opacity duration-300 opacity-50 group-hover:opacity-100"
                    style={{
                        background: `linear-gradient(to top, ${theme.BACKGROUND}66 60%, transparent)`,
                    }}
                />
            </div>


            {/* Content Area */}
            <div className="absolute bottom-0 left-0 right-0 z-20 p-4 h-24 flex items-end">
                <div className="relative w-full">
                    {/* Title - visible by default, hidden on hover */}
                    <h3
                        className="text-xl font-semibold transition-opacity duration-300 group-hover:opacity-0"
                        style={{ color: theme.TEXT }}
                    >
                        {data.title}
                        <br />
                        {date}
                    </h3>

                    {/* Description - hidden by default, shown on hover */}
                    {data.description && (
                        <p
                            className="text-sm absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{ color: theme.TEXT }}
                        >
                            {data.description}
                        </p>
                    )}
                </div>
            </div>
        </a>
    );
};
