import { db } from "../db/index.ts";
import express, { type Request, type Response } from "express";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const { rows } = await db.query("SELECT * FROM cars LIMIT 10;", []);
  res.status(200).json(rows);
});

router.post("/", async (req: Request, res: Response) => {
  const data = req.body;

  await db.query(
    "INSERT INTO cars (placa, modelo, cor, ano) VALUES ($1, $2, $3, $4);",
    [data.placa, data.modelo, data.cor, data.ano],
  );

  res.status(200).json({ message: "Carro criado com sucesso!" });
});

router.put("/:id", async (req: Request, res: Response) => {
  const id = req.params.id.toString();
  const { placa, modelo, cor, ano } = req.body;

  const dbRes = await db.query(
    "UPDATE cars SET (placa, modelo, cor, ano) VALUES ($1, $2, $3, $4) WHERE id = $5;",
    [placa, modelo, cor, ano, id],
  );

  res.status(200).json(dbRes);
});

router.delete("/:id", async (req: Request, res: Response) => {
  const id = req.params.id.toString();

  const dbRes = await db.query("DELETE FROM cars WHERE id = $1", [id]);

  res.status(200).json(dbRes);
});

export default router;
