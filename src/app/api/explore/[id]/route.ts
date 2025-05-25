// GET (single), PUT, PATCH, DELETE
import { db } from '@/lib/firebase'
import { NextApiRequest, NextApiResponse } from 'next'

const collection = db.collection('test')

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query
    const docRef = collection.doc(id as string)

    try {
        if (req.method === 'GET') {
            const doc = await docRef.get()
            if (!doc.exists) return res.status(404).json({ error: 'Not found' })
            return res.status(200).json({ id: doc.id, ...doc.data() })
        }

        if (req.method === 'PUT') {
            await docRef.set(req.body) // full replace
            return res.status(200).json({ id })
        }

        if (req.method === 'PATCH') {
            await docRef.update(req.body) // partial update
            return res.status(200).json({ id })
        }

        if (req.method === 'DELETE') {
            await docRef.delete()
            return res.status(204).end()
        }

        res.setHeader('Allow', ['GET', 'PUT', 'PATCH', 'DELETE'])
        return res.status(405).end(`Method ${req.method} Not Allowed`)
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: 'Internal Server Error' })
    }
}
