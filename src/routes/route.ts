import { Router } from "express";
import { getRouter } from "./getRoute/getRoute";

export const router = Router();

router.get("/users", getRouter);
