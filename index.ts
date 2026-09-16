import 'dotenv/config'

import express, { type Express, type Request, type Response  } from "express";

const app: Express = express()

app.get('/', (req: Request, res: Response) => {
  res.send("Hello world!")
})

app.listen(`${process.env.PORT}`, () => {
  console.log(`App listening on port ${process.env.PORT}`)
})