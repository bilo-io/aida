'use client'
import { Layout } from "@/components/Layout";
import { Tabs } from "@/components/ui/Tabs";

export default function Coding() {
    return (
        <Layout useBreadcrumbs>
            <Tabs
                useUrl
                tabs={[
                    {
                        label: 'Overview',
                        value: 'overview',
                        view: <div />
                    },
                    {
                        label: 'Apps',
                        value: 'apps',
                        view: <div />
                    },
                    {
                        label: 'Prompts',
                        value: 'prompts',
                        view: <div />
                    },
                    {
                        label: 'Models',
                        value: 'models',
                        view: <div />
                    },
                ]}
            />
        </Layout>
    );
}
