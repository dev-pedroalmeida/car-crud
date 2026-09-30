import { type NextFunction, type Request, type Response } from "express";

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  console.error(err)
  console.error(err.message)
  res.status(500).json(err)
}