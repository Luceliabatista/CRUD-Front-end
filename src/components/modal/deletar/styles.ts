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
  width: 80%;
  height: 35%;
  padding: 10px 0;
  border-radius: 10px;
`;

export const Label = styled.div`
  font-size: 25px;
  padding: 5px 15px 15px;
  border-bottom: 2px solid rgb(226 230 233);
  display: flex;
  justify-content: center;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 120px 10px;

  button {
    border: 1px solid #005187;
    border-radius: 4px;
    background: transparent;
    padding: 7px 10px;
    cursor: pointer;
    color: #005187;
    font-weight: 500;
    font-size: 15px;
  }
`;
