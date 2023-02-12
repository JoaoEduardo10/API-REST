import { Router } from "express";
import { createMiddleware } from "../middlewares/create-middleware/create-middleware";
import { DeleteMiddleware } from "../middlewares/delete-middleware/delete-middleware";
import { updateMiddleware } from "../middlewares/update-middleware/update-middleware";
import { createRoute } from "./createRoute/createRoute";
import { deleteRouter } from "./deleteRoute/deleteRoute";
import { getRouter } from "./getRoute/getRoute";
import { updateRouter } from "./updateRoute/updateRoute";

export const router = Router();

router.get("/users", getRouter);
router.post("/users", createMiddleware, createRoute);
router.delete("/users/:id", DeleteMiddleware, deleteRouter);
router.patch("/users/:id", updateMiddleware, updateRouter);
