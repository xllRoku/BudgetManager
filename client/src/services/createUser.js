import axios from "axios";

const createUser = async (userData) => {
  const url = "http://localhost:4000/api/users/";
  return await axios.post(url, userData).then((response) => {
    const { data } = response;
    return data;
  });
};

export default createUser;
