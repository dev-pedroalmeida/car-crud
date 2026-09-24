import { Pool } from "pg";

const pool = new Pool()

const query = (text: string, params: []) => pool.query(text, params)

export const db = {
  query: query
}