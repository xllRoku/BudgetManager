import createUser from "../services/createUser";

const registerUserLogic = (
  registerData,
  setRegisterData,
  setConfirmPassword,
  confirmPassword,
  navigate,
  setError
) => {
  if (Object.values(registerData).includes("")) {
    setError({ msg: "There's at least one input empty", error: true });
    return;
  }

  setError({});

  const checkPassword = registerData.password !== confirmPassword;

  if (checkPassword) {
    setError({ msg: "Las contraseñas deben coincidir", error: true });
    return;
  }

  setError({});

  createUser(registerData).then((data) =>
    setError({ msg: data.msg, error: false })
  );

  setRegisterData({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });

  setConfirmPassword("");
  setTimeout(() => {
    setError({});
    navigate("/");
  }, 1200);
};

export default registerUserLogic;
