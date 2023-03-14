import { Route, Routes } from "react-router-dom";
import { LoginAdmin } from "../pages/login/LoginAdmin";
import { LoginCustomer } from "../pages/login/LoginCustomer";
import { Register } from "../pages/register";
import { ModalDelete } from "../components/modal/deletar";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login/admin" element={<LoginAdmin />} />
      <Route path="/login/customer" element={<LoginCustomer />} />
      <Route path="/cadastro" element={<Register />} />
      <Route
        path="/excluir"
        element={
          <ModalDelete
            isOpen={false}
            toggle={function (): void {
              throw new Error("Function not implemented.");
            }}
            cancel={function (): void {
              throw new Error("Function not implemented.");
            }}
            confirm={function (data: any): void {
              throw new Error("Function not implemented.");
            }}
          />
        }
      />
    </Routes>
  );
};
