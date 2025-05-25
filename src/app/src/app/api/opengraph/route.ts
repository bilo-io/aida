// app/api/opengraph/route.ts
import { NextRequest } from 'next/server';
import ogs from 'open-graph-scraper';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const url = searchParams.get('url');

    if (!url) {
        return new Response(JSON.stringify({ error: 'Missing URL' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    try {
        const { result } = await ogs({ url });

        if (result.success) {
            return new Response(
                JSON.stringify({
                    title: result.ogTitle,
                    description: result.ogDescription,
                    image: Array.isArray(result.ogImage)
                        ? result.ogImage[0]?.url
                        : result.ogImage?.url || null,
                    url: result.requestUrl,
                }),
                { status: 200, headers: { 'Content-Type': 'application/json' } }
            );
        } else {
            return new Response(
                JSON.stringify({ error: 'Failed to fetch OpenGraph data' }),
                { status: 500, headers: { 'Content-Type': 'application/json' } }
            );
        }
    } catch (error) {
        return new Response(
            JSON.stringify({ error: 'Internal error fetching OpenGraph data' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}
