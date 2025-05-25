'use client'
import { Layout } from "@/components/Layout";
import { CollectionLayout, ViewType } from "@/components/ui/Collection/Collection";
import { Toggle } from "@/components/ui/Toggle";
import { ToggleFilters } from "@/components/ui/ToggleFilters";
import { YouTubePlayer } from "@/components/ui/YoutubePlayer";
import { viewOptions } from "@/constants";
import { OpenGraphCard } from '@/components/ui/OpenGraphCard';
import { useLocalStorageState } from "@/hooks/useLocalStorageState";
import { useState } from "react";
import { aiNewsItems } from "@/data/ai-news";

export interface AINews {
    id?: string | number;
    url?: string;
    type?: 'youtube' | 'article',
    source: string;
    createdAt: string,
}
export default function Images() {
    const [view, setView] = useLocalStorageState<ViewType>(
        'news_view_preference',
        'largeGrid'
    )
    const [isFiltersOpen, setIsFiltersOpen] = useState<boolean>(false);

    return (
        <Layout useBreadcrumbs>
            <div className="text-2xl font-bold mb-4 flex flex-row items-center justify-between">
                <div>AI News</div>
                <div className="flex flex-row h-full items-center gap-8">
                    <ToggleFilters
                        isOpen={isFiltersOpen}
                        onClick={() => setIsFiltersOpen((prev) => !prev)}
                    />
                    <Toggle<ViewType>
                        value={view}
                        onChange={setView}
                        options={viewOptions}
                    />
                </div>
            </div>
            {/* 
            <Collapsible isOpen={isFiltersOpen} className='p-2'>
                <FormSearchApps onSubmit={(formData: any) => setQuery(formData)} />
            </Collapsible> */}

            <CollectionLayout<AINews>
                items={aiNewsItems} // Use the imported array
                // import { useTheme } from '@/context/ThemeContext';
                view={view}
                onClick={(item) => {
                    // Handle click, e.g., navigate or show details
                    console.log("Clicked:", item);
                }}
                renderGridItem={(item) => (
                    <div className="card" key={item.id}>
                        {item.type === 'youtube' ? (
                            <>
                                <YouTubePlayer url={item.url as string} />
                            </>
                        ) : null}
                        {item.type === 'article' ? (
                            <OpenGraphCard url={item?.url as string} />
                        ) : null}
                    </div>
                )}
                renderListItem={
                    (item) => (
                        <div className="card" key={item.id}>
                            {item.type === 'youtube' ? (
                                <>
                                    <YouTubePlayer url={item.url as string} />
                                </>
                            ) : null}
                            {item.type === 'article' ? (
                                <OpenGraphCard url={item?.url as string} date={item.createdAt} />
                            ) : null}
                        </div>
                    )}
            />
        </Layout>
    );
}
