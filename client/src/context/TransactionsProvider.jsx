import { createContext, useState } from "react";

export const TransactionContext = createContext();

export const TransactionsProvider = ({ children }) => {
  const [loginDataUser, setLoginDataUser] = useState({
    email: "",
    password: "",
  });
  const [responseLogin, setResponseLogin] = useState({});
  const [registerData, setRegisterData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [transactionData, setTransactionData] = useState({
    type: "",
    categoryId: "",
    date: "",
  });
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState({});
  const [deleteTransaction, setTransactionDelete] = useState({});
  const [walletName, setWalletName] = useState("");
  const [walletBalance, setWalletBalance] = useState(0);
  const [wallet, setWallet] = useState({});
  const [error, setError] = useState({});

  const handleSetLoginDataUser = (event) => {
    setLoginDataUser({
      ...loginDataUser,
      [event.target.name]: event.target.value,
    });
  };

  const handleResponseLogin = (data) => {
    setResponseLogin(data);
  };

  const handleSetRegisterData = (event) => {
    setRegisterData({
      ...registerData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSetTransactionData = (event) => {
    setTransactionData({
      ...transactionData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSetAmount = (event) => {
    setAmount(Number(event.target.value));
  };

  const handleSetCategory = (category) => {
    setCategory(category);
  };

  const hadleSetTransactionDelete = (transaction) => {
    setTransactionDelete(transaction);
  };

  const handleSetWalletName = (event) => {
    setWalletName(event.target.value);
  };

  const handleSetWalletBalance = (event) => {
    setWalletBalance(Number(event.target.value));
  };

  const handleSetWallet = (wallet) => {
    setWallet(wallet);
  };

  return (
    <TransactionContext.Provider
      value={{
        loginDataUser,
        handleSetLoginDataUser,
        responseLogin,
        handleResponseLogin,
        registerData,
        handleSetRegisterData,
        setRegisterData,
        transactionData,
        handleSetTransactionData,
        setTransactionData,
        amount,
        setAmount,
        handleSetAmount,
        category,
        handleSetCategory,
        deleteTransaction,
        hadleSetTransactionDelete,
        walletName,
        handleSetWalletName,
        setWalletName,
        walletBalance,
        handleSetWalletBalance,
        setWalletBalance,
        wallet,
        handleSetWallet,
        error,
        setError,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
