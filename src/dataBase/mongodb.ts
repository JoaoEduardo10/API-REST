import { MongoClient as Mongo, Db } from "mongodb";

export const MongoDb = {
  client: undefined as unknown as Mongo,
  db: undefined as unknown as Db,

  async connect(): Promise<void> {
    const url = process.env.MONGODB_URL as string;
    const username = process.env.MONGODB_USER;
    const password = process.env.MONGODB_PASSWORD;

    const client = await new Mongo(url, { auth: { password, username } });
    const db = client.db("user-db");

    this.client = client;
    this.db = db;

    console.log('connectado ao banco de dados')
  },
};
