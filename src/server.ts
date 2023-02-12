import { app } from "./app";
import express from "express";
import { config } from "dotenv";
import { router } from "./routes/route";
import { MongoDb } from "./dataBase/mongodb";

const main = async () => {
  app.use(express.json());
  config();
  app.use(router);

  await MongoDb.connect();

  const PORT = process.env.PORT || 8080;

  app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
};

main();
