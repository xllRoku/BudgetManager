import axios from "axios";

const logear = async (loginDataUser) => {
  const url = "http://localhost:4000/api/users/login";
  return await axios
    .post(url, loginDataUser)
    .then((response) => {
      const { data } = response;
      return data;
    })
    .catch((error) => {
      return { msg: error.response.data.msg, error: true };
    });
};

export default logear;
