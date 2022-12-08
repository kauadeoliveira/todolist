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
    background-color: ${({ theme }) => theme.palette.background.primary};
    padding: 12px;
    border-radius: 10px;
`

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 100%;
    width: 100%;
`
export const ModalButtons = styled.div`
    width: 100%;
    height: 50px;
`