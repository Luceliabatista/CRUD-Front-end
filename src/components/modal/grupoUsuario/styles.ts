import styled from "styled-components";

export const Label = styled.div`
  font-size: 25px;
  padding: 5px 15px 15px;
  border-bottom: 2px solid rgb(226 230 233);
  display: flex;
  justify-content: space-between;

  button {
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }

  img {
    padding-top: 6px;
    max-height: 22px;
  }
`;

export const Status = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;

  div {
    height: 35px;
    display: flex;
    gap: 5px;
    align-items: center;

    input {
      margin: 0;
    }
  }
`;

export const Inputs = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin: 30px;

  input,
  select {
    width: 100%;
    border-radius: 5px;
    outline: none;
    border: 1px solid #d9d9d9;
    padding: 5px;
    margin-top: 6px;
  }

  select {
    padding: 5px 40px 3px 5px;
  }
`;
export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;

  button {
    border: 1px solid #005187;
    border-radius: 4px;
    background: transparent;
    padding: 7px 15px;
    cursor: pointer;
    color: #005187;
    font-weight: 500;
    font-size: 15px;
  }
`;
