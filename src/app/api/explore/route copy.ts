// GET (list) and POST (create)
import { db } from '@/lib/firebase'
import { NextApiRequest, NextApiResponse } from 'next'

const collection = db.collection('test')

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log({ DEBUG: true, method: req.method })
    
    if (req.method?.toUpperCase() === 'GET') {
        // const snapshot = await collection.get()
        // const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        return res.status(200).json([])
    }

    if (req.method?.toUpperCase() === 'POST') {
        const docRef = await collection.add(req.body)
        return res.status(201).json({ id: docRef.id })
    }

    res.setHeader('Allow', ['GET', 'POST'])
    return res.status(405).end(`Method ${req.method} Not Allowed`)
}
