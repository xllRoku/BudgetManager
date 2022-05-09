import createTransacion from "../services/createTransaction";

const createTransactionLogic = (
  transactionData,
  amount,
  handleSetCategory,
  setTransactionData,
  setAmount,
  navigate,
  id,
  setError
) => {
  const comprobarInputsEmpty =
    Object.values(transactionData).includes(" ") || amount === 0;

  console.log(comprobarInputsEmpty);

  if (comprobarInputsEmpty) {
    return setError({ msg: "There's at least one input empty", error: true });
  }

  console.log("hi");

  setError({});

  const idUser = localStorage.getItem("id");
  createTransacion({ ...transactionData, amount }, idUser).then((data) =>
    handleSetCategory(data)
  );
  setError({ msg: "Transaction has been created", error: false });
  setTransactionData({
    type: "",
    categoryId: "",
    date: "",
  });
  setAmount();
  setTimeout(() => {
    setError({});
    navigate(`/wallet/home/${id}`);
  }, 1000);
};

export default createTransactionLogic;
