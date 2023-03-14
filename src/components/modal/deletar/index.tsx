import { IModalType, Modal } from "..";
import * as styled from "./styles";

import React from "react";

export const ModalDelete: React.FC<IModalType> = (props) => {
  return (
    <Modal {...props}>
      <styled.Label>Deseja Desabilitar o Registro</styled.Label>

      <styled.Buttons>
        <button title="Cancelar" onClick={props.cancel}>
          Cancelar
        </button>
        <button
          title="Desabilitar"
          onClick={() => {
            props.confirm(props.data.id);
            props.toggle();
          }}
        >
          Desabilitar
        </button>
      </styled.Buttons>
    </Modal>
  );
};
