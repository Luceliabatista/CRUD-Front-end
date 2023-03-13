import styled from "styled-components";

export const Main = styled.main`
  display: grid;
  grid-template-columns: 200px 1fr;

  &.collapse {
    grid-template-columns: 1fr;
  }
`;

export const ContainerSidebar = styled.nav`
  border-right: 1px solid #d9d9d9;
  min-height: 100vh;

  &.collapse {
    display: none;
  }

  img {
    max-width: calc(100% - 10px);
    padding: 21px 5px;
  }

  div {
    border-bottom: 2px solid #d9d9d9;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }


  #cadastro {
    font-size: 20px;
    background: #005187;
    color: rgb(234 238 241);
    padding: 5px 15px;
  }
  a {
    text-decoration: none;
    color: rgb(88 152 250);
    padding: 5px 0 15px 15px;
    font-size: 18px;
    background: rgb(235 241 246);
    font-weight: 500;
    display: block;
  }
`;

export const ContainerPagina = styled.div`
  margin: 0 0 0 20px;

  &.collapse {
    margin: 0;
  }

  header {
    padding: 25px 10px 5px 5px;
    border-bottom: 2px solid #d9d9d9;
    display: flex;
    justify-content: space-between;

    button {
      background: transparent;
      outline: none;
      border: none;
      cursor: pointer;
    }

    img {
      max-width: 20px;
    }
  }
`;

export const ContainerBody = styled.div`
  padding: 25px;
`;
