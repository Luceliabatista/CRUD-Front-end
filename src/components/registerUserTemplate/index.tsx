import { AddIcon, FindIcon } from "../../assets/styledIcons";
import * as styled from "./styles";
import dataJson from "./data.json";
import { ModalDelete } from "../modal/usuarioDeletar";
import useModal from "../modal/hooks/useModal";
import { useState } from "react";
import { ModalUsuario } from "../modal/usuarioCriarAlterar";

export const NewUserTemplate: React.FC = () => {
  const { isOpen, toggle } = useModal();
  const deleteProps = useModal();
  const [data, setData] = useState({});
  const [list, setList] = useState(dataJson);

  const handleSalvarCadastro = (values: any) => {
    if (values.id) {
      const newList = list.map((item) =>
        item.id === values.id ? values : item
      );
      setList(newList);
    } else {
      values.id = Math.random();
      setList([...list, values]);
    }
    setData({});
  };

  const handleCancelarCadastro = () => {
    toggle();
    setData({});
  };

  const handleDeletarCadastro = (id: number) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
    setData({});
  };

  const handleCancelarDeletarCadastro = () => {
    deleteProps.toggle();
    setData({});
  };

  return (
    <>
      <ModalUsuario
        isOpen={isOpen}
        toggle={toggle}
        cancel={handleCancelarCadastro}
        confirm={handleSalvarCadastro}
        data={data}
      />

      <ModalDelete
        isOpen={deleteProps.isOpen}
        toggle={deleteProps.toggle}
        cancel={handleCancelarDeletarCadastro}
        confirm={handleDeletarCadastro}
        data={data}
      />
      <styled.Container>
        <styled.ContainerBusca>
          <div>
            <label>Nome</label>
            <input type="search" name="name" id="name" />
          </div>
          <div>
            <label>E-mail</label>
            <input type="search" name="" id="email" />
          </div>
          <div>
            <label>Tipo Usuário</label>
            <div className="typeUser">
              <select name="" id="typeUserUsuario">
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
          <button title="Adicionar usuário" onClick={toggle}>
            <AddIcon />
          </button>
        </styled.ContainerBusca>
        <h2>Usuários</h2>
        <styled.ContainerUsers>
          <table>
            <thead>
              <tr>
                <th id="name">Nome</th>
                <th id="email">Email</th>
                <th id="typeUserUsuario">Tipo Usuário</th>
                <th>Ativo</th>
                <th>AÇÕES</th>
              </tr>
            </thead>
            <tbody>
              {list.map((item, index) => (
                <tr className={index % 2 === 0 ? "colorTr" : ""} key={index}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.typeUser}</td>
                  <td>{item.active}</td>
                  <styled.Actions>
                    <div>
                      <button
                        title="Editar"
                        onClick={() => {
                          setData(item);
                          toggle();
                        }}
                      >
                        <img src="/assets/file-alt-light@2x.png" alt="Editar" />
                      </button>
                      <button
                        title="Excluir"
                        onClick={() => {
                          setData(item);
                          deleteProps.toggle();
                        }}
                      >
                        <img
                          src="/assets/trash-alt-light@2x.png"
                          alt="Excluir"
                        />
                      </button>
                    </div>
                  </styled.Actions>
                </tr>
              ))}
            </tbody>
          </table>
        </styled.ContainerUsers>
      </styled.Container>
    </>
  );
};
