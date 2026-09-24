import { db } from "../db/index.ts"

export async function CreateCarTable() {
  const queryText = `
    CREATE TABLE IF NOT EXISTS cars(
      id SERIAL PRIMARY KEY,
      placa VARCHAR(7) UNIQUE,
      modelo VARCHAR(100),
      cor VARCHAR(25),
      ano VARCHAR(4)
    )
  `
  try {
    await db.query(queryText, [])
    console.log("User table created!")
  } catch (err) {
    console.log(err)
  }
}