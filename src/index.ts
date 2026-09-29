import 'dotenv/config'

import express, { type Express, type Request, type Response } from "express";
import mountRoutes from './routes/index.ts';
import { CreateCarTable } from './data/CreateCarTable.ts';
import { errorHandler } from './middleware/errorHandler.ts';

const app: Express = express()

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send("Hello world!")
})

mountRoutes(app)

app.use(errorHandler)

await CreateCarTable()

app.listen(`${process.env.PORT}`, () => {
  console.log(`App listening on port ${process.env.PORT}`)
})