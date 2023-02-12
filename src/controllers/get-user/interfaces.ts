import { IUser } from "../../models/user";

export interface IGetUserRepository {
  getAll(): Promise<IUser[]>;
}
