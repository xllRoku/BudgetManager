import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useTransactions } from "../hooks/useTransactions";
import Alert from "../components/Alert";
import loginUserLogic from "../helpers/loginUserLogic";

const Login = () => {
  const {
    loginDataUser,
    handleSetLoginDataUser,
    handleResponseLogin,
    error,
    setError,
  } = useTransactions();

  const navigate = useNavigate();

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    loginUserLogic(loginDataUser, handleResponseLogin, navigate, setError);
  };

  const { msg } = error;

  return (
    <div className="w-full h-screen flex justify-center items-center ">
      <div className="w-1/2 mb-20 py-24 px-20 bg-white rounded-md shadow-lg">
        <form onSubmit={(event) => handleOnSubmit(event)}>
          <div>
            <h2 className="my-2 text-center text-4xl">Sing in</h2>
          </div>
          {msg && <Alert alerta={error} />}

          <div className="flex flex-col">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="mt-4 p-1 border-2 text-lg rounded-sm"
              onChange={(event) => handleSetLoginDataUser(event)}
            />
            <input
              type="Password"
              name="password"
              placeholder="Passwrod"
              className="my-4 p-1 border-2 text-lg rounded-sm"
              onChange={(event) => handleSetLoginDataUser(event)}
            />
            <input
              type="submit"
              value="Login"
              className="p-1 uppercase font-bold text-xl text-white bg-green-500 rounded-sm cursor-pointer hover:bg-green-400"
            />
          </div>
        </form>
        <div className="mt-4 flex justify-between">
          <div onClick={() => setError({})}>
            <Link to="/register" className="hover:text-slate-500">
              Create Acount
            </Link>
          </div>
          <div onCanPlay={() => setError({})}>
            <Link to="/forget-password" className="hover:text-slate-500">
              Forget Password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
