import createWallet from "../services/createWallet";

const createWalletLogic = (
  walletName,
  walletBalance,
  setError,
  id,
  handleSetWallet,
  setWalletName,
  setWalletBalance,
  setOpenModal,
  openModal
) => {
  if ([walletName, walletBalance].includes("")) {
    setError({ msg: "There's at leat one input empty", error: true });
    return;
  }
  setError({});

  createWallet({ walletName, walletBalance }, id).then((data) => {
    handleSetWallet(data);
    localStorage.setItem("balance", data.balance);
  });

  setWalletName("");
  setWalletBalance(0);
  setError({ msg: "Wallet has been created", error: false });
  setTimeout(() => {
    setOpenModal(!openModal);
    setError({});
  }, 1200);
};

export default createWalletLogic;
