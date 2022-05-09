import { useEffect, useState, useCallback } from "react";
import CardCategory from "../components/CardCategory";
import useTheme from "../hooks/useTheme";
import { useTransactions } from "../hooks/useTransactions";
import transactionsUser from "../services/TransactionsUser";

import Modal from "react-modal";
import Alert from "../components/Alert";
import createWalletLogic from "../helpers/createWalletLogic";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const Home = () => {
  const {
    category,
    deleteTransaction,
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
  } = useTransactions();
  const { changeTheme, handleSetChangeTheme } = useTheme();

  const id = localStorage.getItem("id");
  const balance = localStorage.getItem("balance");

  const [transactions, setTransactions] = useState([]);
  const [close, setClose] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [total, setTotal] = useState(balance);

  // useEffect(() => {
  //   if (!balance) return;
  //   setTotal(balance);
  // }, []);

  useEffect(() => {
    transactionsUser(id).then((data) => setTransactions(data));
    const seterarTotal = () => {
      let balanceUser = total;

      if (category.type === "expense") {
        console.log(balanceUser);
        balanceUser -= category.amount;
        return setTotal(balanceUser);
      }
      balanceUser += category.amount;
      console.log(balanceUser);
      setTotal(balanceUser);
    };

    if (!category.type) return;
    seterarTotal();
  }, [deleteTransaction, category]);

  console.log(total);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    createWalletLogic(
      walletName,
      walletBalance,
      setError,
      id,
      handleSetWallet,
      setWalletName,
      setWalletBalance,
      setOpenModal,
      openModal
    );
  };

  const { msg } = error;

  return (
    <div className="p-4">
      <div
        className={`${changeTheme ? "text-white" : ""} flex justify-between`}
      >
        <h2 className="text-4xl font-bold mb-2">Maneja tu presupuesto</h2>

        <button
          type="button"
          className="px-2  bg-green-500 text-white rounded-lg font-bold hover:bg-green-400"
          onClick={() => setOpenModal(!openModal)}
        >
          Add Wallet
        </button>

        <div>
          <Modal
            isOpen={openModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <div className="flex items-center justify-end ">
              <div
                className="w-4 mt-2 mr-2  bg-white rounded-full cursor-pointer"
                onClick={() => setOpenModal(!openModal)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            {msg && <Alert alerta={error} />}

            <form onSubmit={(event) => handleOnSubmit(event)}>
              <div>
                <label htmlFor="" className="block">
                  Wallet Name
                </label>
                <input
                  type="text"
                  value={walletName}
                  placeholder="Your wallet name?"
                  className="p-1 border-2"
                  onChange={(event) => handleSetWalletName(event)}
                />
              </div>
              <div>
                <label htmlFor="" className="block">
                  Inital Balance
                </label>
                <input
                  type="number"
                  value={walletBalance}
                  className="p-1 border-2"
                  onChange={(event) => handleSetWalletBalance(event)}
                />
              </div>
              <input
                type="submit"
                value="save"
                className="w-full mt-5 p-1  text-white text-xl rounded-sm font-bold uppercase bg-green-500 cursor-pointer"
              />
            </form>
          </Modal>
        </div>

        <input
          type="button"
          value="cambiar tema"
          className=" text-xl cursor-pointer hover:text-green-500"
          onClick={() => handleSetChangeTheme(!changeTheme)}
        />
      </div>
      <div className="flex">
        <div
          className={`${close ? "" : "m-auto"} ${
            changeTheme ? "bg-slate-700 text-white" : "bg-white"
          } w-3/5 h-44 mb-20 p-4 rounded-md`}
        >
          <div className="font-bold">
            <div className="my-2 flex justify-between">
              <p>Inflow</p>
              <span className="text-blue-500">+${balance}</span>
            </div>
            <div className="flex justify-between">
              <p>Outflow</p>
              <span className="text-red-500">$0</span>
            </div>
            <div className="border-b-2"></div>
            <div className="flex justify-end">
              <span>${total}</span>
            </div>
          </div>
          <input
            type="button"
            className={`${
              close ? "hidden" : ""
            } w-full bg-green-500 p-2 rounded-md cursor-pointer text-center text-white  font-bold hover:bg-green-400`}
            onClick={() => setClose(!close)}
            value="Mostrar 10 ultimas transactions"
          />
        </div>
        <div
          className={`${close ? " " : "hidden"} ${
            changeTheme ? "bg-slate-700" : "bg-white"
          } w-full h-screen ml-8  overflow-y-scroll  rounded-md`}
        >
          <div
            className="flex items-center justify-end "
            onClick={() => setClose(!close)}
          >
            <div className="w-4 mt-2 mr-2  bg-white rounded-full cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="px-6  ">
            {transactions.length === 0 ? (
              <p
                className={`${
                  changeTheme ? "text-white" : ""
                } font-bold text-xl text-center uppercase`}
              >
                No hay transactions...
              </p>
            ) : (
              <>
                {transactions.map((transaction) => (
                  <CardCategory
                    key={transaction.id}
                    transaction={transaction}
                  />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
