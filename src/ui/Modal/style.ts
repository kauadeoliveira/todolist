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
    background-color: wheat;
`

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5px 10px;
    width: 100%;
`

export const ModalContent = styled.div`
    height: 100%;
    width: 100%;
    color: white;
`
export const ModalButtons = styled.div`
    width: 100%;
    height: 50px;
`