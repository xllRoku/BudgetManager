import express from "express";
import {
  getTransactions,
  createTransaction,
  editTransaction,
  deleteTransaction,
} from "../controllers/transactionsControllers.js";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

router
  .route("/:id")
  .get(checkAuth, getTransactions)
  .post(checkAuth, createTransaction)
  .put(checkAuth, editTransaction)
  .delete(checkAuth, deleteTransaction);

export default router;
