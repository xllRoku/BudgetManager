import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";
import useTheme from "../hooks/useTheme";

const Layout = () => {
  const { changeTheme } = useTheme();

  return (
    <div className="flex">
      <SideBar />
      <main
        className={`${changeTheme ? "bg-slate-900" : "bg-slate-200"} w-full `}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
