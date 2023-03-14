import { Navigate, Route, Routes } from "react-router-dom";
import { LoginAdmin } from "../pages/login/LoginAdmin";
import { LoginCustomer } from "../pages/login/LoginCustomer";
import { CadastroUsuario } from "../pages/register/usuario";
import { CadastroFornecedor } from "../pages/register/fornecedor";
import { CadastroCliente } from "../pages/register/cliente";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login/admin" element={<LoginAdmin />} />
      <Route path="/login/customer" element={<LoginCustomer />} />
      <Route path="/cadastro/usuario" element={<CadastroUsuario />} />
      <Route path="/cadastro/fornecedor" element={<CadastroFornecedor />} />
      <Route path="/cadastro/cliente" element={<CadastroCliente />} />

      <Route path="*" element={<Navigate to="/login/admin" />} />
    </Routes>
  );
};
