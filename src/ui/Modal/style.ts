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
    background-color: ${({ theme }) => theme.palette.background.primary};
    display: flex;
    justify-content: center;

    flex-wrap: wrap;
    gap: 15px;
    position: fixed;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 50%;
    z-index: 200;
    width: 500px;
    padding: 12px;
    border-radius: 10px;
`

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-size: 1.8em;
    color: #fff;
    font-weight: bold;
`

export const ModalContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    height: 100%;
    width: 100%;
`
export const ModalButton = styled.div`
    border-radius: ${({ theme }) => theme.dimensions.borderRadius.inputs};
    background-color: ${({ theme }) => theme.palette.colors.primary};
    font-size: 2em;
    padding: 10px;
    width: 100%;
    text-align: center;
`