import { NextFunction, Request, Response } from "express";
import { errorMiddlewares } from "../helps";

export const DeleteMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.params.id) return errorMiddlewares(res, `não há um id`);

  next();
};
