import styled from "styled-components";

export const Label = styled.div`
  font-size: 24px;
  padding: 5px 15px 70px 15px;
  display: flex;
  justify-content: center;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-around;

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
