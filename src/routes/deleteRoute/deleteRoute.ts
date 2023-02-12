import { Request, Response } from "express";
import { DeleteUserCrontroller } from "../../controllers/delete-user/delete-user";
import { DeleteUserRepository } from "../../repositories/delete-user/delete-user";

export const deleteRouter = async (req: Request, res: Response) => {
  const mongoDeleteUserRepository = await new DeleteUserRepository();

  const deleteUserController = await new DeleteUserCrontroller(
    mongoDeleteUserRepository
  );

  const { body, statusCode } = await deleteUserController.handle(req);

  res.status(statusCode).json(body);
};
