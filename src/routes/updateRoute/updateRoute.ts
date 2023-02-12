import { Request, Response } from "express";
import { UpdateUserControllers } from "../../controllers/update-user/update-user";
import { UpdateUserRepository } from "../../repositories/update-user/update-user";

export const updateRouter = async (req: Request, res: Response) => {
  const mongoUpdateRepository = await new UpdateUserRepository();

  const updateUserControler = await new UpdateUserControllers(
    mongoUpdateRepository
  );

  const { body, statusCode } = await updateUserControler.handle(req);

  res.status(statusCode).json(body);
};
