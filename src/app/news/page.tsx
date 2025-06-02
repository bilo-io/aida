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
import { Tabs } from "@/components/ui";

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
            </Collapsible> 
            */}
            
            <Tabs
                useUrl
                tabs={[
                    {
                        label: 'YouTube',
                        value: 'youtube',
                        view: (
                            <CollectionLayout<AINews>
                                items={aiNewsItems.filter((item: AINews) => item.type === 'youtube')} // Use the imported array
                                view={view}
                                onClick={(item) => {
                                    console.log("Clicked:", item);
                                }}
                                renderGridItem={(item) => (
                                    <div className="card" key={item.id}>
                                        <YouTubePlayer url={item.url as string} date={item.createdAt} />
                                    </div>
                                )}
                                renderListItem={
                                    (item) => (
                                        <div className="card" key={item.id}>
                                            <YouTubePlayer url={item.url as string} date={item.createdAt} />
                                        </div>
                                    )}
                            />
                        )
                    },
                    {
                        label: 'Articles',
                        value: 'articles',
                        view: (
                            <CollectionLayout<AINews>
                                items={aiNewsItems.filter((item: AINews) => item.type === 'article')} // Use the imported array
                                view={view}
                                onClick={(item) => {
                                    console.log("Clicked:", item);
                                }}
                                renderGridItem={(item) => (
                                    <div className="card" key={item.id}>
                                        <OpenGraphCard url={item?.url as string} date={item.createdAt} />
                                    </div>
                                )}
                                renderListItem={
                                    (item) => (
                                        <div className="card" key={item.id}>
                                            <OpenGraphCard url={item?.url as string} date={item.createdAt} />
                                        </div>
                                    )}
                            />
                        )
                    },
                ]}
            />
        </Layout>
    );
}
