import axios from "axios";

const createWallet = async (wallet, id) => {
  const url = `http://localhost:4000/api/wallets/${id}`;
  return await axios.post(url, wallet).then((response) => {
    const { data } = response;
    return data;
  });
};

export default createWallet;
