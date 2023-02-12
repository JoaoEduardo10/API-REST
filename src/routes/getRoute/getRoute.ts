import { Request, Response } from "express";
import { GetUserController } from "../../controllers/get-user/get-user";
import { GetUserRepository } from "../../repositories/get-user/get-user";

export const getRouter = async (req: Request, res: Response) => {
  const mongoGetUserRepository = await new GetUserRepository();

  const getUserCrontroller = await new GetUserController(
    mongoGetUserRepository
  );

  const { body, statusCode } = await getUserCrontroller.handle(req);

  res.status(statusCode).json(body);
};
