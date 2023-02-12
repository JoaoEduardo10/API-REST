import { IUser } from "../../models/user";

export interface IUpdateUserparams {
  firstName: string;
  lastName: string;
  password: string;
}

export interface IUpdateUserRepository {
  update(id: string, params: IUpdateUserparams): Promise<IUser>;
}
