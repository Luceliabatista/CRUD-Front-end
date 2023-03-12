import styled from "styled-components";
import { ILoginTemplate } from ".";


export const Column = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap:50px;
    align-items: center;
    min-height: 100vh;

    @media screen and (min-width:   1200px) {
        grid-template-columns: 1fr 500px;
        gap:0;
    }
`

export const ContainerImage = styled.div`
    position: relative;

    img {
        max-width:100%;
        min-height: 100vh;
    }

    div {
        position: absolute;
        top: 0px;
        right: -60px;
        transform: rotateY(90deg);
    }
`

export const ContainerForm = styled.div`
    max-width:250px;
    margin:0 auto;
    width:100%;

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
        width:100%;
        padding:8px;
        border: none;
        border-radius: 3px;
        cursor: pointer;
    }
`

export const Field = styled.div`
    max-width:100%;
    margin-bottom: 10px;

    :last-child {
        margin-bottom: 0px;
    }
`

export const ContainerLogo = styled.div <ILoginTemplate>`
margin-bottom: ${({ isCustomer }) => isCustomer ? "30px" : "70px"};
    img {
    max-width:100%;
    }
`