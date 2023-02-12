import { NextFunction, Request, Response } from "express";
import { IHttpRequest } from "../../controllers/interfaces";
import { IUpdateUserparams } from "../../controllers/update-user/interface";
import { errorMiddlewares } from "../helps";

export const updateMiddleware = (
  req: IHttpRequest<IUpdateUserparams>,
  res: Response,
  next: NextFunction
) => {
  const id: string = req.params.id;
  const body = req.body;

  if (!id) return errorMiddlewares(res, `Id invalid!`);

  const allFindUpdateUser: (keyof IUpdateUserparams)[] = [
    "firstName",
    "lastName",
    "password",
  ];

  for (const find of allFindUpdateUser) {
    if (!body?.[find]?.length) {
      return errorMiddlewares(res, `${find} is required!`);
    }
  }

  const allUpdateUser = Object.keys(body).some(
    (key) => !allFindUpdateUser.includes(key as keyof IUpdateUserparams)
  );

  if (allUpdateUser) {
    return errorMiddlewares(
      res,
      `so é permitido os campos ${allFindUpdateUser.map((key) => key)}`
    );
  }

  next();
};
