export interface AIApplicationSummary {
    id: string;
    name: string;
    description: string;
    image: string;
    logo: string;
    companyName: string;
    companyLink: string;
    companyLogo: string;
    link: string;
    pricing: string;
    rating?: string;
    types: string[]; // e.g. ['writing', 'coding', 'chatbot']
    pros: string[];
    cons: string[];
    subscriptions?: {
        name: string,
        usdMonthly: number | string,
        usdYearly: number | string,
        description?: string;
        pricingDetails?: { [key in string]?: string | number | any }
    }[],
}
