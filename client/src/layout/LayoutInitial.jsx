import { Outlet } from "react-router-dom";

const LayoutInitial = () => {
  return (
    <div className="bg-slate-200 relative">
      <div className="absolute w-full">
        <h2 className="text-6xl text-center text-green-500 font-bold uppercase ">
          Budget Manager
        </h2>
      </div>
      <main className="pt-7">{<Outlet />}</main>
    </div>
  );
};

export default LayoutInitial;
