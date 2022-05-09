import { useState, useEffect } from "react";
import { useTransactions } from "../hooks/useTransactions";
import Alert from "../components/Alert";
import getTypeCategorys from "../services/getTypeCategorys";
import { useNavigate } from "react-router-dom";
import createTransactionLogic from "../helpers/createTransactionLogic";

const AddTransaction = () => {
  const {
    transactionData,
    setTransactionData,
    handleSetTransactionData,
    amount,
    setAmount,
    handleSetAmount,
    handleSetCategory,
    error,
    setError,
  } = useTransactions();

  const [categorys, setCategorys] = useState([]);
  const [activeSelectCategory, setActiveSelectCategory] = useState(true);

  const navigate = useNavigate();

  const id = localStorage.getItem("id");

  const { type } = transactionData;

  useEffect(() => {
    if (!type) return;
    getTypeCategorys(type).then((data) => {
      setCategorys(data);
    });
  }, [type]);

  const handelOnSubmit = (event) => {
    event.preventDefault();
    createTransactionLogic(
      transactionData,
      amount,
      handleSetCategory,
      setTransactionData,
      setAmount,
      navigate,
      id,
      setError
    );
  };

  const { msg } = error;

  return (
    <div className="m-auto w-1/2 h-screen">
      <div className="h-full flex flex-col justify-center">
        <div className="py-10 px-8 bg-white rounded-lg">
          <div>
            <h2 className="text-center font-bold">Add Transaction</h2>
          </div>
          {msg && <Alert alerta={error} />}
          <form onSubmit={handelOnSubmit}>
            <div className="my-4">
              <select
                name="type"
                className="w-full  border-2 p-1"
                value={transactionData.type}
                onChange={async (event) => {
                  handleSetTransactionData(event);
                  setActiveSelectCategory(false);
                }}
              >
                <option value="">Select Type</option>
                <option name="expense" value="expense">
                  Expense
                </option>
                <option name="income" value="income">
                  Income
                </option>
              </select>
            </div>
            <div className="my-4">
              <select
                name="categoryId"
                value={transactionData.categoryId}
                className="w-full  border-2 p-1"
                disabled={activeSelectCategory}
                onChange={(event) => handleSetTransactionData(event)}
              >
                <option value="">Select Category</option>
                {categorys.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="my-4">
              <label className="block w-full rounded-md">Date</label>
              <input
                type="date"
                name="date"
                value={transactionData.date}
                className="w-full p-1 border-2"
                onChange={(event) => handleSetTransactionData(event)}
              />
            </div>
            <div className="my-4">
              <label className="block w-full rounded-md">Amount</label>
              <input
                type="number"
                name="amount"
                value={amount}
                className="w-full p-1 border-2"
                onChange={(event) => handleSetAmount(event)}
              />
            </div>
            <input
              type="submit"
              value="save"
              className="w-full p-1 cursor-pointer rounded-sm bg-green-500 font-bold uppercase text-white hover:bg-green-600"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTransaction;
