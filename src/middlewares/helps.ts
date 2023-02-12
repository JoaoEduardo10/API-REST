import { Response } from "express";

export const errorMiddlewares = (res: Response, message: string) => {
  return res.status(400).send(message);
};
