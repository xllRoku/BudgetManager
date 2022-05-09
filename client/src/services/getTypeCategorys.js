import axios from "axios";

const getTypeCategorys = async (type) => {
  const url = `http://localhost:4000/api/categorys/${type}`;
  return await axios(url).then((response) => {
    const { data } = response;
    return data;
  });
};

export default getTypeCategorys;
