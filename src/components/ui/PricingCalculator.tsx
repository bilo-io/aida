// PricingCalculator.tsx
import { aiApplications } from '@/data/ai-apps';
import React, { useState, useMemo, useEffect } from 'react';

// Helper function to safely parse price strings to numbers
const parsePrice = (price: number | string | undefined): number => {
    if (typeof price === 'number') {
        return price;
    }
    if (typeof price === 'string') {
        const num = parseFloat(price);
        return isNaN(num) ? 0 : num; // Return 0 for "custom", "variable", etc.
    }
    return 0; // Return 0 for undefined
};

const PricingCalculator: React.FC = () => {
    // State to store IDs of selected AI applications
    const [selectedAppIds, setSelectedAppIds] = useState<string[]>([]);
    // State to store the chosen subscription name for each selected app
    // e.g., { "lumaai_luma": "Pro Plan", "promethean_promethean": "Indie" }
    const [selectedSubscriptionNames, setSelectedSubscriptionNames] = useState<{ [appId: string]: string }>({});

    // Effect to set a default subscription when an app is newly selected
    useEffect(() => {
        const newDefaults: { [appId: string]: string } = {};
        selectedAppIds.forEach(appId => {
            if (!selectedSubscriptionNames[appId]) {
                const app = aiApplications.find((a: { id: string; }) => a.id === appId);
                if (app && app.subscriptions && app.subscriptions.length > 0) {
                    newDefaults[appId] = app.subscriptions[0].name; // Set first subscription as default
                }
            }
        });
        setSelectedSubscriptionNames(prev => ({ ...prev, ...newDefaults }));
    }, [selectedAppIds, selectedSubscriptionNames]); // Rerun if selected apps or existing selections change

    // Handler for selecting/deselecting AI applications
    const handleAppSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const options = event.target.options;
        const newSelectedIds: string[] = [];
        for (let i = 0; i < options.length; i++) {
            if (options[i].selected) {
                newSelectedIds.push(options[i].value);
            }
        }
        setSelectedAppIds(newSelectedIds);

        // Also clean up subscriptions for deselected apps
        setSelectedSubscriptionNames(prev => {
            const newNames = { ...prev };
            Object.keys(newNames).forEach(appId => {
                if (!newSelectedIds.includes(appId)) {
                    delete newNames[appId];
                }
            });
            return newNames;
        });
    };

    // Handler for changing subscription for a specific app
    const handleSubscriptionChange = (appId: string, subscriptionName: string) => {
        setSelectedSubscriptionNames(prev => ({
            ...prev,
            [appId]: subscriptionName
        }));
    };

    // Filter and prepare data for the table, calculate totals
    const { displayedApps, totalMonthly, totalYearly } = useMemo(() => {
        let currentTotalMonthly = 0;
        let currentTotalYearly = 0;

        const filteredApps = aiApplications.filter((app: { id: string; }) => selectedAppIds.includes(app.id));

        // @ts-ignore
        const appsWithSelectedSubscriptions = filteredApps.map((app: { id: string | number; subscriptions: any[]; }) => {
            const selectedSubName = selectedSubscriptionNames[app.id];
            const selectedSubscription = app.subscriptions?.find((sub: { name: string; }) => sub.name === selectedSubName);

            // Add to totals if a valid subscription is found
            if (selectedSubscription) {
                const monthlyPrice = parsePrice(selectedSubscription.usdMonthly);
                const yearlyPrice = parsePrice(selectedSubscription.usdYearly);

                currentTotalMonthly += monthlyPrice;
                currentTotalYearly += yearlyPrice;

                return {
                    app,
                    selectedSubscription,
                    monthlyPrice,
                    yearlyPrice,
                };
            }
            return {
                app,
                selectedSubscription: null, // No valid subscription found or selected
                monthlyPrice: 0,
                yearlyPrice: 0,
            };
        }).filter((item: { selectedSubscription: null; }) => item.selectedSubscription !== null); // Only show apps that have a selected subscription

        return {
            displayedApps: appsWithSelectedSubscriptions,
            totalMonthly: currentTotalMonthly,
            totalYearly: currentTotalYearly,
        };
    }, [selectedAppIds, selectedSubscriptionNames, aiApplications]); // Recalculate if any dependencies change

    // Formatter for currency display
    const currencyFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '900px', margin: '20px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
            <h1 style={{ textAlign: 'center', color: '#333' }}>AI Application Pricing Calculator</h1>

            <div style={{ marginBottom: '30px' }}>
                <label htmlFor="app-select" style={{ display: 'block', marginBottom: '10px', fontSize: '1.1em', fontWeight: 'bold' }}>
                    Select AI Applications:
                </label>
                <select
                    id="app-select"
                    multiple
                    value={selectedAppIds}
                    onChange={handleAppSelectChange}
                    style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', minHeight: '150px', overflowY: 'auto' }}
                >
                    {aiApplications
                            // @ts-ignore
                        .filter((app: { subscriptions: string | any[]; }) => app.subscriptions && app.subscriptions.length > 0) // Only show apps with subscriptions
                        .map((app: { id: React.Key | readonly string[] | null | undefined; name: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }) => (
                            <option key={app.id as string} value={app.id as string}>
                                {app.name}
                            </option>
                        ))}
                </select>
            </div>

            {displayedApps.length > 0 && (
                <div style={{ marginBottom: '30px' }}>
                    <h2 style={{ fontSize: '1.4em', marginBottom: '15px', color: '#555' }}>Selected Subscriptions:</h2>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ background: '#f2f2f2' }}>
                                <th style={tableHeaderStyle}>Application</th>
                                <th style={tableHeaderStyle}>Subscription Plan</th>
                                <th style={tableHeaderStyle}>Monthly Price</th>
                                <th style={tableHeaderStyle}>Yearly Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* @ts-ignore */}
                            {displayedApps.map((item: { app: { id: React.Key | null | undefined; name: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; subscriptions: any[]; }; selectedSubscription: { name: any; usdMonthly: string; usdYearly: string; }; monthlyPrice: string | number | bigint; yearlyPrice: string | number | bigint; }) => (
                                <tr key={item.app.id as string}>
                                    <td style={tableCellStyle}>{item.app.name}</td>
                                    <td style={tableCellStyle}>
                                        {item.app.subscriptions && item.app.subscriptions.length > 1 ? (
                                            <select
                                                value={selectedSubscriptionNames[item.app.id as string]}
                                                onChange={(e) => handleSubscriptionChange(item.app.id as string, e.target.value)}
                                                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
                                            >
                                                {item.app.subscriptions.map((sub: { name: boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | React.Key | null | undefined; }) => (
                                                    <option key={sub.name as string} value={sub.name as string}>
                                                        {sub.name}
                                                    </option>
                                                ))}
                                            </select>
                                        ) : (
                                            // Display only if there's exactly one subscription
                                            item.selectedSubscription?.name || 'N/A'
                                        )}
                                    </td>
                                    <td style={tableCellStyle}>
                                        {item.selectedSubscription?.usdMonthly === 'custom' || item.selectedSubscription?.usdMonthly === 'variable'
                                            ? 'Custom'
                                            : currencyFormatter.format(item.monthlyPrice as number)}
                                    </td>
                                    <td style={tableCellStyle}>
                                        {item.selectedSubscription?.usdYearly === 'custom' || item.selectedSubscription?.usdYearly === 'variable'
                                            ? 'Custom'
                                            : currencyFormatter.format(item.yearlyPrice as number)}
                                    </td>
                                </tr>
                            ))}
                            <tr style={{ background: '#e6e6e6', fontWeight: 'bold' }}>
                                <td colSpan={2} style={{ ...tableCellStyle, textAlign: 'right', paddingRight: '20px' }}>
                                    Total:
                                </td>
                                <td style={tableCellStyle}>{currencyFormatter.format(totalMonthly)}</td>
                                <td style={tableCellStyle}>{currencyFormatter.format(totalYearly)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}

            {selectedAppIds.length === 0 && (
                <p style={{ textAlign: 'center', color: '#666' }}>Please select applications to see their pricing.</p>
            )}
        </div>
    );
};

// Basic inline styles for the table for demonstration
const tableHeaderStyle: React.CSSProperties = {
    padding: '12px 8px',
    borderBottom: '2px solid #ccc',
    textAlign: 'left',
    color: '#333'
};

const tableCellStyle: React.CSSProperties = {
    padding: '10px 8px',
    borderBottom: '1px solid #eee',
    textAlign: 'left'
};

export default PricingCalculator;