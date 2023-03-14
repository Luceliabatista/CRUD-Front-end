import { IModalType, Modal } from "../hooks";
import * as styled from "./styles";

import React, { useState, useEffect } from "react";

const defaultData = {
  id: "",
  name: "",
  email: "",
  password: "",
  typeUser: "",
};

export const ModalUsuario: React.FC<IModalType> = (props) => {
  const [data, setData] = useState(defaultData);

  useEffect(() => {
    !props.isOpen && setData(defaultData);
  }, [props.isOpen]);

  useEffect(() => {
    setData(props.data || defaultData);
  }, [props.data]);

  const acao = data.id ? "Edição" : "Cadastro";

  return (
    <Modal {...props}>
      <styled.Label>
        {acao} de Usuário
        <button title="Fechar" onClick={props.toggle}>
          <img src="/assets/fechar.png" alt="Fechar" />
        </button>
      </styled.Label>

      <styled.Inputs>
        <div>
          <label>Nome</label>
          <input
            type="search"
            name="name"
            id="name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="search"
            name=""
            id="email"
            autoComplete="off"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        <div>
          <label>Senha</label>
          <input
            type="password"
            name="password"
            autoComplete="off"
            id="password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>
        <div>
          <label>Tipo Usuário Usuário</label>
          <div>
            <select
              name="typeUser"
              value={data.typeUser}
              onChange={(e) => setData({ ...data, typeUser: e.target.value })}
            >
              <option value="" disabled selected>
                Selecione
              </option>
              <option value="Administrador">Administrador</option>
              <option value="Usuario">Usuário</option>
            </select>
          </div>
        </div>
      </styled.Inputs>
      <styled.Buttons>
        <button title="Cancelar" onClick={props.cancel}>
          Cancelar
        </button>
        <button
          title="Cadastrar"
          onClick={() => {
            props.confirm(data);
            props.toggle();
          }}
        >
          Cadastrar
        </button>
      </styled.Buttons>
    </Modal>
  );
};
