import styled from "styled-components";

export const ModalOverlay = styled.div`
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBox = styled.div`
  display: block;
  background: white;
  max-width: 85%;
  min-width:50%;
  /* max-height: 35%; */
  min-height: 10%;
  padding: 10px 0;
  border-radius: 10px;
`;
