import { db } from "../db/index.ts";
import express, { type Request, type Response } from "express";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const { rows } = await db.query("SELECT * FROM cars LIMIT 10;", []);
  res.send(rows);
});

router.post("/", async (req: Request, res: Response) => {
  const carInfo = req.body;

  await db.query(
    "INSERT INTO cars (placa, modelo, cor, ano) VALUES ($1, $2, $3, $4);",
    [carInfo.placa, carInfo.modelo, carInfo.cor, carInfo.ano],
  );
  res.send(200);
});

router.delete("/:id", async (req: Request, res: Response) => {
  const carId = JSON.stringify(req.params.id);

  await db.query("DELETE FROM cars WHERE id = $1", [carId]);
  res.send(200)
});

export default router;
