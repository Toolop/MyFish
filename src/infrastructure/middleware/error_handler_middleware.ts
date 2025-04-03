import { NextFunction } from "express";

export default function errorHandlingMiddlware(
  err: Error & { statusCode?: number; customMessage?: string },
  req: any,
  res: any,
  next: NextFunction
) {
  console.log(err);
  err.statusCode = err.statusCode || 500;
  return err.customMessage || err.message
    ? res.status(err.statusCode).json({
        status: "failed",
        message: err.customMessage || err.message,
      })
    : res
        .status(err.statusCode)
        .json({ status: "failed", message: "Internal Server Error", err });
}
