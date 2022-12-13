import styled from "styled-components";

interface BackdropProps {
    close: boolean
}

export const Backdrop = styled.div<BackdropProps>`
    display: ${({ close }) => close ? 'block' : 'none'};
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
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 200;
    width: 500px;
    border-radius: 10px;
    padding: 12px;
`

export const ModalHeader = styled.div`
    display: flex;
    width: 100%;
    font-size: 1.8em;
    color: #fff;
    font-weight: bold;

    span{
        margin: auto;
    }

    div{
        cursor: pointer;
    }
`

export const ModalContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    height: 100%;
    width: 100%;
`

export const TaskPriority = styled.div`
    display: flex;
    gap: 10px;

    input{
        display: none;
    }
    label{
        border-radius: ${({ theme }) => theme.dimensions.borderRadius.inputs};
        display: block;
        cursor: pointer;
        padding: 5px;
        width: 80px;
        text-align: center;
        font-size: 1.4em;
        font-weight: bold;
        transition: all .4s;
    }
    
    .high{
        background-color: ${({ theme }) => theme.palette.colors.priority.high};

        &:hover{
            background-color: #e57373;
        }
    }
    
    .middle{
        background-color: ${({ theme }) => theme.palette.colors.priority.middle};

        &:hover{
            background-color: #81c784;
        }
    }

    .low{
        background-color: ${({ theme }) => theme.palette.colors.priority.low};

        &:hover{
            background-color: #ffb74d;
        }
    }
`

export const ModalButton = styled.div`
    border-radius: ${({ theme }) => theme.dimensions.borderRadius.inputs};
    background-color: ${({ theme }) => theme.palette.colors.primary};
    font-size: 1.8em;
    font-weight: bold;
    padding: 10px;
    width: 100%;
    text-align: center;
    transition: background-color 0.2s ease 0s, color 0.2s ease 0s;
    cursor: pointer;

    &:hover{
        background-color: #a883ff;
    }
`

