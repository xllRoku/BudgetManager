import axios from "axios";

const delTransaction = async (id) => {
  const url = `http://localhost:4000/api/transactions/${id}`;
  return await axios.delete(url).then((response) => {
    const { data } = response;
    return data;
  });
};

export default delTransaction;
