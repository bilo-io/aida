/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useState } from 'react'
import { Layout } from "@/components/Layout";
import { CollectionLayout, ViewType } from "@/components/ui/Collection/Collection";
import { Collapsible } from '@/components/ui/Collapsible';
import { useFetch } from '@/hooks/useFetch';

import FormSearchApps from "@/components/Forms/FormSearchApps";

import { AIApplicationSummary } from "@/types/ai-apps";
import { Toggle } from '@/components/ui/Toggle';
import { viewOptions } from '@/constants';
import { ToggleFilters } from '@/components/ui/ToggleFilters';
import { useTheme } from '@/context/ThemeContext';
import { FaLink } from 'react-icons/fa';
import AITypes from '@/components/ui/AITypes';
import { AiAppModal } from '@/components/ui/Modals/AiAppModal';
import { toQueryString } from '@/utils/queryString';
import { useLocalStorageState } from '@/hooks/useLocalStorageState';

export default function Explore() {
    const [view, setView] = useLocalStorageState<ViewType>(
        'explore_view_preference',
        'largeGrid'
    )
    const [isFiltersOpen, setIsFiltersOpen] = useState<boolean>(false);
    const { theme } = useTheme();
    const [data, setData] = useState<AIApplicationSummary[]>([])
    const [query, setQuery] = useState<{
        search: string | null;
        type: string | null;
    }>({
        search: null,
        type: null
    })

    const { loading } = useFetch<AIApplicationSummary[]>(`/api/explore?${toQueryString(query)}`, {
        auto: true,
        method: 'GET',
        onSuccess: (data: AIApplicationSummary[]) => {
            setData(data as AIApplicationSummary[])
        },
        onError: (error) => console.error(error)
    })



    return (
        <Layout useBreadcrumbs>
            <div className="text-2xl font-bold mb-4 flex flex-row items-center justify-between">
                <div>AI Apps</div>
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

            <Collapsible isOpen={isFiltersOpen} className='p-2'>
                <FormSearchApps onSubmit={(formData: any) => setQuery(formData)} />
            </Collapsible>

            <CollectionLayout<AIApplicationSummary>
                items={data || []}
                view={view}
                isLoading={loading}
                onClick={(item) => {
                    // Handle click, e.g., navigate or show details
                    console.log("Clicked:", item);
                }}
                renderGridItem={(item) => (
                    <div className="card" key={item.id}>
                        <img src={`${window.location.origin}${item.image}`} alt={item.name} className="w-full h-48 object-cover rounded" />
                        <div className="p-2">
                            <div className='flex flex-row items-center justify-between'>
                                <h3 className="text-lg font-semibold">{item.name}</h3>
                                <div className='flex flex-row items-center'>
                                    <AiAppModal appSummary={item} />
                                    <div className={`ml-2 text-white bg-[${theme.PRIMARY}] p-1 px-2 rounded-full flex flex-row items-center`} style={{ backgroundColor: theme.PRIMARY }}>
                                        <a href={item.link} target='_blank' className='text-sm'>Open</a>
                                        <FaLink className='text-white text-xs ml-2' />
                                    </div>
                                </div>
                            </div>
                            <p className="text-sm text-gray-600">{item.description}</p>
                            <p className="text-xs text-gray-400 mt-1">{item.rating}</p>
                            <AITypes data={item.types} />
                        </div>
                    </div>
                )}
                renderListItem={
                    (item) => (
                        <div className="card flex flex-row" key={item.id}>
                            <img src={`${window.location.origin}${item.image}`} alt={item.name} className="w-[16rem] md:w-[16rem] h-40 object-cover rounded" />
                            <div className="w-3/4 p-4 pl-8">
                                <div className='flex flex-row items-center justify-between'>
                                    <h3 className="text-lg font-semibold">{item.name}</h3>
                                    <div className='flex flex-row items-center'>
                                        <AiAppModal appSummary={item} />
                                        <div className={`ml-2 text-white bg-[${theme.PRIMARY}] p-1 px-2 rounded-full flex flex-row items-center`} style={{ backgroundColor: theme.PRIMARY }}>
                                            <a href={item.link} target='_blank' className='text-sm'>Open</a>
                                            <FaLink className='text-white text-xs ml-2' />
                                        </div>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600">{item.description}</p>
                                <p className="text-xs text-gray-400 mt-1">{item.rating}</p>
                                <AITypes data={item.types} />
                            </div>
                        </div>
                    )}
            />


        </Layout>
    );
}
