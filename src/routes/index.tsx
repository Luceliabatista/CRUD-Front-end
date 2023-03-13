import { Route, Routes } from "react-router-dom";
import { LoginAdmin } from "../pages/login/LoginAdmin";
import { LoginCustomer } from "../pages/login/LoginCustomer";
import { Register } from "../pages/register";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login/admin" element={<LoginAdmin />} />
      <Route path="/login/customer" element={<LoginCustomer />} />
      <Route path="/cadastro" element={<Register />} />
    </Routes>
  );
};
