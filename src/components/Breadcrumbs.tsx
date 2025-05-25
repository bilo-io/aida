'use client';

import { useTheme } from '@/context/ThemeContext';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';
import { FaChevronRight } from 'react-icons/fa6';


interface BreadcrumbsProps {
    maxSegments?: number; // Optional: for truncating long paths
    routeNameMap?: Record<string, string>; // e.g. { '/users/:id': 'User Profile' }
}

export const Breadcrumbs = ({
    maxSegments = 5,
    routeNameMap = {},
}: BreadcrumbsProps) => {
    const { theme } = useTheme();
    const pathname = usePathname(); // e.g. "/users/123/settings"
    const segments = pathname.split('/').filter(Boolean);

    const formatSegment = (segment: string) => {
        // Replace dashes and camelCase
        return decodeURIComponent(segment)
            .replace(/-/g, ' ')
            .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
            .replace(/\b\w/g, (l) => l.toUpperCase());
    };

    const getDisplayName = (href: string, segment: string) => {
        // Check route name overrides
        for (const pattern in routeNameMap) {
            const regex = new RegExp(
                '^' +
                pattern
                    .replace(/:[^/]+/g, '[^/]+') // Match param segments like :id
                    .replace(/\//g, '\\/') +
                '$'
            );
            if (regex.test(href)) return routeNameMap[pattern];
        }
        return formatSegment(segment);
    };

    const truncated = segments.length > maxSegments;
    const visibleSegments = truncated
        ? [segments[0], '...', ...segments.slice(-2)]
        : segments;

    const breadcrumbItems = visibleSegments.map((segment, index) => {
        const isEllipsis = segment === '...';
        const pathSlice = segments.slice(0, truncated ? (index === 0 ? 1 : segments.length - 2 + index) : index + 1);
        const href = '/' + pathSlice.join('/');
        const isLast = index === visibleSegments.length - 1;

        return (
            <Fragment key={href + segment}>
                <FaChevronRight className="mx-2 h-4 w-4 text-gray-400" />
                {isEllipsis ? (
                    <span className="text-gray-500">...</span>
                ) : isLast ? (
                    <span className="text-gray-500 capitalize">
                        {getDisplayName(href, segment)}
                    </span>
                ) : (
                    <Link
                        href={href}
                                className="hover:underline capitalize transition-colors"
                                style={{
                                    color: theme.PRIMARY
                                }}
                    >
                        {getDisplayName(href, segment)}
                    </Link>
                )}
            </Fragment>
        );
    });

    // SEO: JSON-LD schema
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: segments.map((segment, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: getDisplayName('/' + segments.slice(0, index + 1).join('/'), segment),
            item: `${typeof window !== 'undefined' ? window.location.origin : ''}/${segments
                .slice(0, index + 1)
                .join('/')}`,
        })),
    };

    return (
        <>
            <nav className="flex items-center text-sm text-gray-600">
                <Link href="/" className="hover:underline transition-colors"
                    style={{
                        color: theme.PRIMARY
                    }}>
                    Home
                </Link>
                {breadcrumbItems}
            </nav>
            <script type="application/ld+json" suppressHydrationWarning>
                {JSON.stringify(schema)}
            </script>
        </>
    );
};
