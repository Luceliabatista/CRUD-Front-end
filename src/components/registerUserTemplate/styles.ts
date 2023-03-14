import styled from "styled-components";

export const Container = styled.section`
  max-width: 100%;

  h2 {
    color: #005187;
    margin-top: 2px;
    margin-bottom: 15px;
  }

  button {
    padding: 0;
    background: transparent;
    border: none;
    outline: none;
    margin: 0 auto;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }

  @media screen and (min-width: 1000px) {
  }

  @media screen and (min-width: 1400px) {
  }
`;

export const ContainerBusca = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: flex-end;
  gap: 25px;
  padding: 20px 15px;
  width: 100%;
  max-width: 100%;
  border: 2px solid #d9d9d9;
  border-radius: 10px;
  background-color: #f8f8f8;

  input,
  select {
    width: 100%;
    border-radius: 5px;
    outline: none;
    border: 1px solid #d9d9d9;
    padding: 5px;
    margin-top: 5px;
  }

  select {
    padding-top: 3px;
    margin-right: 10px;
  }

  .typeUser {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }

  @media screen and (min-width: 967px) {
    grid-template-columns: 1fr 1fr 1fr 90px;
    padding: 30px 0 30px 40px;

    select {
      margin-right: 20px;
    }

    button {
      margin-left: 20px;
    }
  }
`;

export const ContainerUsers = styled.div`
  width: 100%;
  max-width: 100%;
  overflow-x: auto;

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th {
    padding: 10px 20px;
    background-color: #d4e1eb;
    color: black;

    :first-child {
      border-radius: 10px 0 0 0;
    }

    :last-child {
      border-radius: 0 10px 0 0;
      width: 100px;
    }
  }

  td {
    padding: 1px 10px;
    width: auto;
  }

  tr {
    :last-child {
      td:first-child {
        border-radius: 0 0 0 10px;
      }

      td:last-child {
        border-radius: 0 0 10px 0;
      }
    }
  }

  tr.colorTr {
    background-color: #f2f2f2;
  }
`;

export const Actions = styled.td`
  width: 100px;

  div {
    display: flex;
    justify-content: space-between;
  }

  img {
    max-height: 17px;
  }
`;
