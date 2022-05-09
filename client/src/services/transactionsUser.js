import axios from "axios";

const transactionsUser = async (id) => {
  const url = `http://localhost:4000/api/transactions/${id}`;
  return await axios(url).then((response) => {
    const { data } = response;
    return data;
  });
};

export default transactionsUser;
