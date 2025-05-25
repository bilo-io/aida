// src/app/api/explore/[...slug]/route.ts

import { db } from '@/lib/firebase'
import { NextRequest } from 'next/server'

const collection = db.collection('test')

function getIdFromUrl(req: NextRequest): string | null {
    const url = new URL(req.url)
    const segments = url.pathname.split('/')
    return segments[segments.length - 1] || null
}

export async function GET(req: NextRequest) {
    const id = getIdFromUrl(req)
    if (!id) return new Response(JSON.stringify({ error: 'Invalid ID' }), { status: 400 })

    try {
        const doc = await collection.doc(id).get()
        if (!doc.exists) return new Response(JSON.stringify({ error: 'Not found' }), { status: 404 })
        return new Response(JSON.stringify({ id: doc.id, ...doc.data() }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        })
    } catch (error) {
        console.error(error)
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 })
    }
}

export async function PUT(req: NextRequest) {
    const id = getIdFromUrl(req)
    if (!id) return new Response(JSON.stringify({ error: 'Invalid ID' }), { status: 400 })

    try {
        const body = await req.json()
        await collection.doc(id).set(body)
        return new Response(JSON.stringify({ id }), { status: 200 })
    } catch (error) {
        console.error(error)
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 })
    }
}

export async function PATCH(req: NextRequest) {
    const id = getIdFromUrl(req)
    if (!id) return new Response(JSON.stringify({ error: 'Invalid ID' }), { status: 400 })

    try {
        const body = await req.json()
        await collection.doc(id).update(body)
        return new Response(JSON.stringify({ id }), { status: 200 })
    } catch (error) {
        console.error(error)
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 })
    }
}

export async function DELETE(req: NextRequest) {
    const id = getIdFromUrl(req)
    if (!id) return new Response(JSON.stringify({ error: 'Invalid ID' }), { status: 400 })

    try {
        await collection.doc(id).delete()
        return new Response(null, { status: 204 })
    } catch (error) {
        console.error(error)
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 })
    }
}
