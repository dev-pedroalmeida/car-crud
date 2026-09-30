import { Pool } from "pg";

const pool = new Pool()

const query = async (text: string, params?: Array<string> | Array<number>) => {
  const start = Date.now()
  const res = await pool.query(text, params) 
  const duration = Date.now() - start
  console.log("Query: ", text, "duration: ", duration, "ms ", "rows: ", res.rowCount)
  return res
}

export const db = {
  query: query
}