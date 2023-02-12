import { IGetUserRepository } from "../../controllers/get-user/interfaces";
import { MongoDb } from "../../dataBase/mongodb";
import { IUser } from "../../models/user";

export class GetUserRepository implements IGetUserRepository {
  async getAll(): Promise<IUser[]> {
    const user = await MongoDb.db
      .collection<Omit<IUser, "id">>("users")
      .find({})
      .toArray();

    return user.map(({ _id, ...rest }) => ({ id: _id.toHexString(), ...rest }));
  }
}
