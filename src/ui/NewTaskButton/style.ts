import styled from "styled-components";

export const Button = styled.div`
    position: fixed;
    bottom: 50px;
    right: 30px;
    background-color: ${({ theme }) => theme.palette.colors.primary.main};
    height: 50px;
    width: 50px;
    text-align: center;
    line-height: 50px;
    font-size: 40px;
    border-radius: 100%;
    cursor: pointer;

    &:hover{
        background-color: ${({ theme }) => theme.palette.colors.primary.light};
    }
`