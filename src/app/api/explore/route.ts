import { NextResponse } from 'next/server'
import { aiApplications as items } from '@/data/ai-apps'
import { AIApplicationSummary  } from '@/types/ai-apps'

// Helper to find item index
const findIndex = (id: string) => items.findIndex(item => item.id === id)

// export async function GET(req: Request) {
//     // Return all items as JSON
//     return NextResponse.json(items)
// }

// export async function POST(req: Request) {
//     try {
//         const body = await req.json()
//         if (!body.name) {
//             return NextResponse.json({ error: 'Missing name' }, { status: 400 })
//         }

//         const newItem: AIApplicationSummary = {
//             id: (items.length ? items[items.length - 1].id + 1 : 1).toString(),
//             name: body.name,
//         }

//         items.push(newItem)

//         return NextResponse.json(newItem, { status: 201 })
//     } catch (err) {
//         return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
//     }
// }

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url)

    const search = searchParams.get('search')?.toLowerCase() || ''
    const type = searchParams.get('type')?.toLowerCase()

    const filtered = items.filter(item => {
        const matchesSearch =
            item.name.toLowerCase().includes(search?.toLowerCase()) ||
            item.companyName.toLowerCase().includes(search?.toLowerCase()) ||
            item.description.toLocaleLowerCase().includes(search?.toLocaleLowerCase()) ||
            item.types.includes(search?.toLowerCase())
        
        const matchesType = type ? item.types.map(t => t.toLowerCase()).includes(type) : true
        return matchesSearch && matchesType
    })

    return NextResponse.json(filtered)
}

export async function PUT(req: Request) {
    try {
        const body = await req.json()
        if (!body.id || !body.name) {
            return NextResponse.json({ error: 'Missing id or name' }, { status: 400 })
        }

        const index = findIndex(body.id)
        if (index === -1) {
            return NextResponse.json({ error: 'Item not found' }, { status: 404 })
        }

        items[index].name = body.name
        return NextResponse.json(items[index])
    } catch (err) {
        return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
    }
}

export async function DELETE(req: Request) {
    try {
        const body = await req.json()
        if (!body.id) {
            return NextResponse.json({ error: 'Missing id' }, { status: 400 })
        }

        const index = findIndex(body.id)
        if (index === -1) {
            return NextResponse.json({ error: 'Item not found' }, { status: 404 })
        }

        const deleted = items.splice(index, 1)[0]
        return NextResponse.json(deleted)
    } catch (err) {
        return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
    }
}
