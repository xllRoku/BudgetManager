import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Alert from "../components/Alert";
import { useTransactions } from "../hooks/useTransactions";
import registerUserLogic from "../helpers/registerUserLogic";

const Register = () => {
  const {
    registerData,
    handleSetRegisterData,
    setRegisterData,
    error,
    setError,
  } = useTransactions();

  const navigate = useNavigate();

  const [confirmPassword, setConfirmPassword] = useState("");

  const handleOnSubmit = (event) => {
    event.preventDefault();
    registerUserLogic(
      registerData,
      setRegisterData,
      setConfirmPassword,
      confirmPassword,
      navigate,
      setError
    );
  };

  const { msg } = error;

  return (
    <div className="w-full h-screen flex justify-center items-center bg-slate-200">
      <div className="w-1/2 py-12 px-20 bg-white rounded-md shadow-lg">
        <div className="mb-4">
          <h2 className="text-center text-2xl uppercase">
            Register your Account
          </h2>
        </div>
        {msg && <Alert alerta={error} />}
        <form onSubmit={(event) => handleOnSubmit(event)}>
          <div className="my-2">
            <label className="block text-xl">Name</label>
            <input
              type="text"
              name="name"
              value={registerData.name}
              placeholder="Enter your name"
              className="w-full p-1 border-2 rounded-sm"
              onChange={(event) => handleSetRegisterData(event)}
            />
          </div>
          <div className="my-2">
            <label className="block text-xl">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={registerData.lastName}
              placeholder="Enter your last name"
              className="w-full p-1 border-2 rounded-sm"
              onChange={(event) => handleSetRegisterData(event)}
            />
          </div>
          <div className="my-2">
            <label className="block text-xl">Email</label>
            <input
              type="email"
              name="email"
              value={registerData.email}
              placeholder="Enter your email adress"
              className="w-full p-1 border-2 rounded-sm"
              onChange={(event) => handleSetRegisterData(event)}
            />
          </div>
          <div className="my-2">
            <label className="block text-xl">Password</label>
            <input
              type="password"
              name="password"
              value={registerData.password}
              placeholder="Enter your password"
              className="w-full p-1 border-2 rounded-sm"
              onChange={(event) => handleSetRegisterData(event)}
            />
          </div>
          <div className="my-2">
            <label className="block text-xl">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              placeholder="Enter your password again"
              className="w-full p-1 border-2 rounded-sm"
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
          </div>
          <input
            type="submit"
            value="Sing up"
            className="w-full mt-4 p-1 text-white text-xl font-bold rounded-sm  cursor-pointer bg-green-500 hover:bg-green-400"
          />
        </form>
        <div className="mt-4 text-center">
          <Link to="/">
            Already have an account?
            <span className="ml-4 text-green-500 hover:text-green-900 ">
              Sing in
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
