import express from "express";
import { createWallet } from "../controllers/walletControllers.js";

const router = express.Router();

router.post("/:id", createWallet);

export default router;
