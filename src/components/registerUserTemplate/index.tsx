import { AddIcon, FindIcon } from "../../assets/styledIcons";
import * as styled from "./styles";
// import { AppMenuLateral } from "../../components";
import dataJson from "./data.json";

interface INewUserTemplateProps {
  children?: React.ReactNode;
}
export const NewUserTemplate: React.FC<INewUserTemplateProps> = ({
  children,
}) => {
  const handleAdicionarCadastro = () => {};

  return (
    // <AppMenuLateral>
    <styled.Container>
      <styled.ContainerBusca>
        <div>
          <label>Nome</label>
          <input type="search" name="nome" id="nome" />
        </div>
        <div>
          <label>E-mail</label>
          <input type="search" name="" id="email" />
        </div>
        <div>
          <label>Tipo Usuário</label>
          <div className="buttons">
            <select name="" id="tipoUsuario">
              <option value="" disabled selected>
                Selecione
              </option>
              <option value="Administrador">Administrador</option>
              <option value="Usuario">Usuário</option>
            </select>
            <button title="Pesquisar">
              <FindIcon />
            </button>
          </div>
        </div>
        <button onClick={handleAdicionarCadastro}>
          <AddIcon />
        </button>
      </styled.ContainerBusca>
      <h2>Usuários</h2>
      <styled.ContainerUsers>
        <thead>
          <tr>
            <th id="nome">Nome</th>
            <th id="email">E-mail</th>
            <th id="tipoUsuario">Tipo Usuário</th>
            <th>Ativo</th>
            <th>AÇÕES</th>
          </tr>
        </thead>
        <tbody>
          {dataJson.map((item, index) => (
            <tr className={index % 2 === 0 ? "corTr" : ""} key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.tipo}</td>
              <td>{item.ativo}</td>
              <styled.Acoes>
                <div>
                  <button title="Editar">
                    <img src="/assets/file-alt-light@2x.png" alt="Editar" />
                  </button>
                  <button title="Excluir">
                    <img src="/assets/trash-alt-light@2x.png" alt="Excluir" />
                  </button>
                </div>
              </styled.Acoes>
            </tr>
          ))}
        </tbody>
      </styled.ContainerUsers>
    </styled.Container>
    // </AppMenuLateral>
  );
};
