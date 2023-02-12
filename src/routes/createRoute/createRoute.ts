import { Request, Response } from "express";
import { CreateUserController } from "../../controllers/create-user/create-user";
import { CreateUserRepository } from "../../repositories/creste-user/create-user";

export const createRoute = async (req: Request, res: Response) => {
  const mongoCreateUserRepository = await new CreateUserRepository();

  const createUserController = await new CreateUserController(
    mongoCreateUserRepository
  );

  const { body, statusCode } = await createUserController.handle(req);

  res.status(statusCode).json(body);
};
