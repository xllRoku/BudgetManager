import logear from "../services/logear";

const loginUserLogic = async (
  loginDataUser,
  handleResponseLogin,
  navigate,
  setError
) => {
  if (Object.values(loginDataUser).includes("")) {
    setError({ msg: "There's at least one input emty", error: true });
    return;
  }

  setError({});
  logear(loginDataUser).then((data) => {
    if (data.msg) {
      setError(data);
      return;
    }
    handleResponseLogin(data);
    localStorage.setItem("id", data.id);
    const id = localStorage.getItem("id");
    navigate(`/wallet/home/${id}`);
  });
};

export default loginUserLogic;
