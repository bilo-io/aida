'use client'
import Image from 'next/image'
import { Layout } from "@/components/Layout";
import { CollectionLayout } from "@/components/ui/Collection/Collection";
import { Tabs } from "@/components/ui/Tabs";
import FormAccountProfile from '@/components/Forms/FormAccountProfile'
import { aiApplications } from "@/data/ai-apps";
import { AIApplicationSummary } from "@/types/ai-apps";

export default function Account() {
    return (
        <Layout useBreadcrumbs>
            <Tabs
                useUrl
                tabs={[
                    {
                        label: 'Profile',
                        value: 'profile',
                        view: (
                            <div>
                                <FormAccountProfile
                                    onSubmit={function (data: {
                                        email: string;
                                        password: string;
                                        age: number;
                                        role: "admin" | "user" | "guest";
                                        bio?: string | undefined;
                                    }): void {
                                    console.log('onSubmit', data)
                                } } />
                            </div>
                        )
                    },
                    {
                        label: 'Finance',
                        value: 'finance',
                        view: (
                            <CollectionLayout<AIApplicationSummary>
                                items={aiApplications}
                                view="largeGrid"
                                onClick={(item) => {
                                    // Handle click, e.g., navigate or show details
                                    console.log("Clicked:", item);
                                } }
                                renderGridItem={(item) => (
                                    <div className="card" key={item.id}>
                                        <Image width={640} src={item.image} alt={item.name} className="w-full h-48 object-cover rounded" />
                                        <div className="p-2">
                                            <h3 className="text-lg font-semibold">{item.name}</h3>
                                            <p className="text-sm text-gray-600">{item.description}</p>
                                            <p className="text-xs text-gray-400 mt-1">{item.rating}</p>
                                        </div>
                                    </div>
                                )} renderListItem={function (item: AIApplicationSummary): React.ReactElement {
                                    throw new Error("Function not implemented.");
                                } }                            />
                        )
                    },
                    {
                        label: 'Subscription',
                        value: 'subscription',
                        view: <div />
                    },
                ]}
            />
        </Layout>
    );
}
