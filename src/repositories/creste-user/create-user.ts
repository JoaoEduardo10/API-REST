import {
  ICreateUserparams,
  ICreateUserRepository,
} from "../../controllers/create-user/interfaces";
import { MongoDb } from "../../dataBase/mongodb";
import { IUser } from "../../models/user";

export class CreateUserRepository implements ICreateUserRepository {
  async create(params: ICreateUserparams): Promise<IUser> {
    const { insertedId } = await MongoDb.db
      .collection("users")
      .insertOne(params);

    const user = await MongoDb.db
      .collection<Omit<IUser, "id">>("users")
      .findOne({ _id: insertedId });

    if (!user) throw new Error("User not created!");

    const { _id, ...rest } = user;

    return { id: _id.toHexString(), ...rest };
  }
}
