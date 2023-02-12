import { ObjectId } from "mongodb";
import { IDeleteUserRepository } from "../../controllers/delete-user/interface";
import { MongoDb } from "../../dataBase/mongodb";
import { IUser } from "../../models/user";

export class DeleteUserRepository implements IDeleteUserRepository {
  async delete(id: string): Promise<IUser> {
    const user = await MongoDb.db
      .collection<Omit<IUser, "id">>("users")
      .findOne({ _id: new ObjectId(id) });

    if (!user) throw new Error("User not fould!");

    const { deletedCount } = await MongoDb.db
      .collection("users")
      .deleteOne({ _id: new ObjectId(id) });

    if (!deletedCount) throw new Error("User not deleted!");

    const { _id, ...rest } = user;

    return { id: _id.toHexString(), ...rest };
  }
}
