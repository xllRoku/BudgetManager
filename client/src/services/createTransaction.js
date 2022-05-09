import axios from "axios";

const createTransacion = async (transaction, id) => {
  const url = `http://localhost:4000/api/transactions/${id}`;
  return await axios.post(url, transaction).then((response) => {
    const { data } = response;
    return data;
  });
};

export default createTransacion;
