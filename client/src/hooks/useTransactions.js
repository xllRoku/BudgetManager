import { TransactionContext } from "../context/TransactionsProvider";
import { useContext } from "react";

export const useTransactions = () => {
  return useContext(TransactionContext);
};
