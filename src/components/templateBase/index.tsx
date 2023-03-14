import { useState } from "react";
import * as styled from "./styles";
import dataTypeJson from "./../modal/grupoUsuario/dataType.json";
import useModal from "../modal/hooks/useModal";
import { GrupoUsuario } from "../modal/grupoUsuario";

interface ITemplateBase {
  children?: React.ReactNode;
}

export const TemplateBase: React.FC<ITemplateBase> = ({ children }) => {
  const [collapse, setCollapse] = useState(false);
  const { isOpen, toggle } = useModal();
  const [data, setData] = useState({});
  const [list, setList] = useState(dataTypeJson);

  const handleSalvarCadastroType = (values: any) => {
    if (values.id) {
      const newList = list.map((item) =>
        item.id === values.id ? values : item
      );
      // edição
      setList(newList);
    } else {
      values.id = Math.random();
      setList([...list, values]);
    }
  };

  const handleCancelarCadastroType = () => {
    toggle();
    setData({});
  };

  return (
    <>
      <GrupoUsuario
        isOpen={isOpen}
        toggle={toggle}
        cancel={handleCancelarCadastroType}
        confirm={handleSalvarCadastroType}
        data={data}
      />{" "}
      <styled.Main className={collapse ? "collapse" : ""}>
        <styled.ContainerSidebar className={collapse ? "collapse" : ""}>
          <div>
            <img src="/assets/telemetrixLogo.png" alt="Logo da empresa" />
          </div>
          <ul>
            <li id="cadastro">Cadastros</li>
            <li>
              <a href="/cadastro/usuario"> Usuários</a>
            </li>
            <li>
              <a href="/cadastro/cliente">Clientes</a>
            </li>
            <li>
              <a href="/cadastro/fornecedor">Fornecedores</a>
            </li>
          </ul>
        </styled.ContainerSidebar>
        <styled.ContainerPagina>
          <header>
            <button onClick={() => setCollapse(!collapse)} title="Menu Lateral">
              <img src="/assets/caret-left-solid@2x.png" alt="" />
            </button>
            <button
              title="Configuração"
              onClick={() => {
                toggle();
              }}
            >
              <img src="/assets/cog-light@2x.png" alt="" />
            </button>
          </header>
          <styled.ContainerBody>{children}</styled.ContainerBody>
        </styled.ContainerPagina>
      </styled.Main>
    </>
  );
};
