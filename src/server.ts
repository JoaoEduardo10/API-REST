import { app } from "./app";
import express from "express";
import { config } from "dotenv";
import { router } from "./routes/route";
import { MongoDb } from "./dataBase/mongodb";

const main = async () => {
  app.use(express.json());
  config();

  await MongoDb.connect();

  app.use(router);

  const PORT = process.env.PORT || 8080;

  app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
};

main();
