import styled from "styled-components";

interface CheckTaskProps {
    state: Boolean;
    icon: string;
}

export const CheckTaskWrapper = styled.div<CheckTaskProps>`
    border-radius: ${({ theme }) => theme.dimensions.borderRadius.inputs};
    background-color: ${({ state, theme }) => state ? theme.palette.colors.primary.main : 'white'};
    background-image: url(${({ state, icon }) => state ? icon : ''});
    background-repeat: no-repeat;
    width: 20px;
    height: 20px;
    cursor: pointer;
    transition: all .2s;

    &:hover{
        background-color: ${({ state, theme }) => state ? theme.palette.colors.primary.dark : theme.palette.text.disabled};
    }
`