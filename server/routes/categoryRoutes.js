import express from "express";
import { getTypeCategory } from "../controllers/categoryControllers.js";

const router = express.Router();

router.get("/:type", getTypeCategory);

export default router;
