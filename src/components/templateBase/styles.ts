import styled from "styled-components";

export const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr;

  @media screen and (min-width: 967px) {
    grid-template-columns: 200px 1fr;

    &.collapse {
      grid-template-columns: 1fr;
    }
  }
`;

export const ContainerSidebar = styled.nav`
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 2;
  border-right: 1px solid #d9d9d9;
  min-height: 100vh;
  display: none;
  background: #fff;

  .logo {
    padding: 0px 20px;
  }

  .mobileCloseMenu {
    position: absolute;
    top: 5px;
    right: 5px;
    z-index: 10;
    border-bottom: none;

    button {
      background: transparent;
      border: none;
      outline: none;
      width: 30px;
      heigth: 30px;
      cursor: pointer;

      img {
        width: 100%;
      }
    }
  }

  &.collapse {
    display: block;
  }

  img {
    max-width: 80%;
    padding: 21px 0px;
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
    font-weight: 400;
    display: block;
  }

  @media screen and (min-width: 967px) {
    position: relative;
    background: transparent;
    display: block;

    img {
      max-width: 100%;
      padding: 21px 5px;
    }

    &.collapse {
      display: none;
    }

    .mobileCloseMenu {
      display: none;
    }
  }
`;

export const ContainerPagina = styled.div`
  margin: 0;
  max-width: 100%;
  width: 100%;
  overflow-x: auto;

  &.collapse {
    margin: 0;
  }

  header {
    margin-left: 15px;
    padding: 25px 10px 5px 10px;
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
      max-width: 25px;
    }
  }
`;

export const ContainerBody = styled.div`
  padding: 25px 15px;

  @media screen and (min-width: 967px) {
    padding: 25px 25px 25px 40px;
  }
`;
