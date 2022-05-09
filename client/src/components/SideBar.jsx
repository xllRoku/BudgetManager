import { Link } from "react-router-dom";
import useTheme from "../hooks/useTheme";

const SideBar = () => {
  const { changeTheme } = useTheme();

  const id = localStorage.getItem("id");

  return (
    <header
      className={`${
        changeTheme ? "bg-slate-600" : "bg-green-500"
      } w-1/6 p-4 h-screen shadow-lg shadow-white`}
    >
      <nav className="h-full">
        <ul className="h-full flex flex-col  items-center justify-between gap-6 text-white">
          <div>
            <li
              className={`${
                changeTheme ? "text-green-500" : "text-white"
              } text-center text-3xl font-bold uppercase cursor-pointer `}
            >
              <Link to={`home/${id}`}>Budget Manager</Link>
            </li>
            <div className="mt-6">
              <Link to={`home/${id}`}>
                <li className="block w-full mb-2 p-1 px-2 font-medium  hover:bg-[#DFF8D6] hover:text-black rounded-sm">
                  Home
                </li>
              </Link>
              <Link to={`add-transaction/${id}`}>
                <li className="block  p-1 px-2 font-medium hover:bg-[#DFF8D6] hover:text-black  rounded-sm">
                  Add Transaction
                </li>
              </Link>
            </div>
          </div>
          <Link to="/">
            <li className="block w-full p-1 px-2 font-medium hover:bg-[#DFF8D6] hover:text-black  rounded-sm">
              Log out
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default SideBar;
