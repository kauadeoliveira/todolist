import styled from "styled-components";
interface CheckTaskProps {
    checkIcon: string;
}

export const CheckTaskWrapper = styled.div<CheckTaskProps>`
    label{
        display: flex;
        background-color: #fff;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        justify-content: center;
        cursor: pointer;
        transition: .3s;

        &:hover{
            background-color: rgb(255 255 255 / 84%);
        }
    }

    input{
        /* display: none; */
        height: 100%;
        width: 100%;
    }

    input:checked + label{
        background-color: ${({ theme }) => theme.palette.colors.primary.main};
        background-image: url(${({ checkIcon }) => checkIcon});
        background-repeat: no-repeat;
    }
`