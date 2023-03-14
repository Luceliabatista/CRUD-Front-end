import styled from "styled-components";
import { ILoginTemplate } from ".";

export const Column = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 50px;
  align-items: center;
  min-height: 100vh;

  @media screen and (min-width: 1000px) {
    grid-template-columns: 1fr 500px;
    gap: 0;
  }

  @media screen and (min-width: 1400px) {
    grid-template-columns: 1fr 600px;
    gap: 0;
  }
`;

export const ContainerImage = styled.div`
  display: none;
  position: relative;
  background-image: url("/assets/bg-login.jpeg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  min-height: 100vh;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    max-width: 100%;
    min-height: 100vh;
    background: #005187;
    opacity: 0.4;
  }

  ::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    background-image: url("/assets/wave_novo.png");
    background-repeat: no-repeat;
    background-position: right;
  }

  @media screen and (min-width: 1000px) {
    display: block;
  }
`;

export const ContainerForm = styled.div`
  max-width: 350px;
  margin: 0 auto;
  width: 100%;

  input {
    border: none;
    border-bottom: 2px solid #005187;
    padding: 5px 10px;
    outline: none;
    width: calc(100% - 20px);
    max-width: 100%;
  }

  button {
    background-color: #005187;
    color: #fff;
    width: 100%;
    padding: 8px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }

  @media screen and (min-width: 1000px) {
    max-width: 250px;
  }
`;

export const Field = styled.div`
  max-width: 100%;
  margin-bottom: 10px;

  :last-child {
    margin-bottom: 0px;
  }
`;

export const ContainerLogo = styled.div<ILoginTemplate>`
  margin-bottom: ${({ isCustomer }) => (isCustomer ? "30px" : "70px")};
  img {
    max-width: 100%;
  }
`;
