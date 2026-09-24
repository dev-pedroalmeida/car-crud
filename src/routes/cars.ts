import { db } from '../db/index.ts'
import express, { type Request, type Response } from 'express'

const router = express.Router()

router.get('/', async (req: Request, res: Response) => {
  const {rows} = await db.query("SELECT * FROM cars LIMIT 10", [])
  res.send(rows)
})

export default router