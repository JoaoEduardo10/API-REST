import { ObjectId } from "mongodb";
import {
  IUpdateUserparams,
  IUpdateUserRepository,
} from "../../controllers/update-user/interface";
import { MongoDb } from "../../dataBase/mongodb";
import { IUser } from "../../models/user";

export class UpdateUserRepository implements IUpdateUserRepository {
  async update(id: string, params: IUpdateUserparams): Promise<IUser> {
    const { upsertedCount } = await MongoDb.db.collection("users").updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          ...params,
        },
      }
    );

    if (upsertedCount) throw new Error("User not updated!");

    const user = await MongoDb.db
      .collection<Omit<IUser, "id">>("users")
      .findOne({ _id: new ObjectId(id) });

    if (!user) throw new Error("User not existe!");

    const { _id, ...rest } = user;

    return { id: _id.toHexString(), ...rest };
  }
}
