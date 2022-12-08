import styled from "styled-components";

export const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 100;
`

export const ModalWrapper = styled.div`
    position: fixed;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 50%;
    z-index: 200;
    width: 500px;
    height: 200px;
    background-color: red;
`

export const ModalHeader = styled.div`
    width: 100%;
    height: 100px;
    background-color: blue;
`