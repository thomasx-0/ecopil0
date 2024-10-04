// pages/api/carbon-footprint.ts
import { NextApiRequest, NextApiResponse } from 'next'
import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI
// @ts-ignore
const client = new MongoClient(uri)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await client.connect()
    const database = client.db('DataBase0-Ecopil')
    const collection = database.collection('carbon_footprint')

    const data = await collection.find({}).sort({ timestamp: 1 }).toArray()

    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ error: 'Error connecting to the database' })
  } finally {
    await client.close()
  }
}