import { Routes, Route } from "react-router-dom ";
import { TransactionsProvider } from "../context/TransactionsProvider";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgetPassword from "../pages/ForgetPassword";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import AddTransaction from "../pages/AddTransaction";
import ThemeProvider from "../context/ThemeProvider";
import LayoutInitial from "../layout/LayoutInitial";

const Router = () => {
  return (
    <ThemeProvider>
      <TransactionsProvider>
        <Routes>
          <Route path="/" element={<LayoutInitial />}>
            <Route index element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="forget-password" element={<ForgetPassword />} />
          </Route>
          <Route path="/wallet/" element={<Layout />}>
            <Route path="home/:id" element={<Home />} />
            <Route path="add-transaction/:id" element={<AddTransaction />} />
          </Route>
        </Routes>
      </TransactionsProvider>
    </ThemeProvider>
  );
};

export default Router;
