import { useState } from "react";
import * as styled from "./styles";

interface ITemplateBase {
  children?: React.ReactNode;
}

export const TemplateBase: React.FC<ITemplateBase> = ({ children }) => {
  const [collapse, setCollapse] = useState(false);

  return (
    <>
      <styled.Main className={collapse ? "collapse" : ""}>
        <styled.ContainerSidebar className={collapse ? "collapse" : ""}>
          <div>
            <img src="/assets/telemetrixLogo.png" alt="Logo da empresa" />
          </div>
          <ul>
            <li id="cadastro">Cadastros</li>
            <li>
              <a href="#"> Usuários</a>
            </li>
            <li>
              <a href="#">Clientes</a>
            </li>
            <li>
              <a href="#">Fornecedores</a>
            </li>
          </ul>
        </styled.ContainerSidebar>
        <styled.ContainerPagina>
          <header>
            <button onClick={() => setCollapse(!collapse)} title="Menu Lateral">
              <img src="/assets/caret-left-solid@2x.png" alt="" />
            </button>
            <button title="Configuração">
              <img src="/assets/cog-light@2x.png" alt="" />
            </button>
          </header>
          <styled.ContainerBody>{children}</styled.ContainerBody>
        </styled.ContainerPagina>
      </styled.Main>
    </>
  );
};
