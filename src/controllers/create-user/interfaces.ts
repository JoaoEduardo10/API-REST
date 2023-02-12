import { IUser } from "../../models/user";

export interface ICreateUserparams {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface ICreateUserRepository {
  create(params: ICreateUserparams): Promise<IUser>;
}
