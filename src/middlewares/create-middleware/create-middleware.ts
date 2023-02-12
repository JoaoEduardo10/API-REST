import { NextFunction, Response } from "express";
import { ICreateUserparams } from "../../controllers/create-user/interfaces";
import { IHttpRequest } from "../../controllers/interfaces";
import { errorMiddlewares } from "../helps";
import validator from "validator";

export const createMiddleware = (
  req: IHttpRequest<ICreateUserparams>,
  res: Response,
  next: NextFunction
) => {
  const allFindCreateUser: (keyof ICreateUserparams)[] = [
    "firstName",
    "lastName",
    "email",
    "password",
  ];

  for (const find of allFindCreateUser) {
    if (!req?.body?.[find as keyof ICreateUserparams]?.length) {
      return errorMiddlewares(res, `${find} Is required!`);
    }
  }

  const createUserPermission = Object.keys(req.body).some(
    (key) => !allFindCreateUser.includes(key as keyof ICreateUserparams)
  );

  if (createUserPermission) {
    return errorMiddlewares(
      res,
      `Somente os campos ${allFindCreateUser.map((item) => item)}`
    );
  }

  const validatorIsEmail = validator.isEmail(req.body.email);

  if (!validatorIsEmail) {
    return errorMiddlewares(
      res,
      `Email ${req.body.email} Invalid. Adicone um @gmail.com`
    );
  }

  next();
};
