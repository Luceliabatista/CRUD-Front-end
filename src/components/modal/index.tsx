import * as styled from "./criarAlterar/styles";

import React, { ReactNode } from "react";

export interface IModalType {
  data?: any;
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
  cancel: () => void;
  confirm: (data: any) => void;
}

export const Modal: React.FC<IModalType> = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <>
      <styled.ModalOverlay>
        <styled.ModalBox>{children}</styled.ModalBox>
      </styled.ModalOverlay>
    </>
  );
};
