import { IModalType, Modal } from "../modalType";
import * as styled from "./styles";

import React, { useState, useEffect } from "react";

const defaultData = {
  id: "",
  typeUser: "",
  active: Boolean,
};

export const GrupoUsuario: React.FC<IModalType> = (props) => {
  const [data, setData] = useState(defaultData);

  useEffect(() => {
    !props.isOpen && setData(defaultData);
  }, [props.isOpen]);

  useEffect(() => {
    setData(props.data || defaultData);
  }, [props.data]);

  return (
    <Modal {...props}>
      <styled.Label>
        Cadastro de Grupo de Usuário
        <button title="Fechar" onClick={props.toggle}>
          <img src="/assets/fechar.png" alt="Fechar" />
        </button>
      </styled.Label>

      <styled.Inputs>
        <div>
          <label>Nome do Grupo</label>
          <input
            type="search"
            name="name"
            id="name"
            value={data.typeUser}
            onChange={(e) => setData({ ...data, typeUser: e.target.value })}
          />
        </div>
        <styled.Status>
          <div>
            <input
              type="radio"
              id="ativo"
              name="status"
              value="Ativo"
              checked
            />
            <span>Ativo</span>
          </div>
          <div>
            <input type="radio" id="inativo" name="status" value="Inativo" />
            <span>Inativo</span>
          </div>
        </styled.Status>
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
