import styled, { DefaultTheme, StyledComponent } from "styled-components";

interface InputProps {
    width: string
    icon: string[]
}

export const InputWrapper= styled.div<Pick<InputProps, "width">>`
    width: ${({ width }) => width};
    display: flex;
    flex-direction: column;
`
export const MyInput = styled.input<InputProps>`
    width: 100%;
    background-color: ${({ theme }) => theme.palette.background.secondary};
    border: 1px solid ${({ theme }) => theme.palette.background.secondary};
    color: #fff;
    outline: none;
    padding: 10px 5px;
    border-radius: ${({ theme }) => theme.dimensions.borderRadius.inputs};
    font-family: sans-serif;

    &::-webkit-calendar-picker-indicator{
        cursor: pointer;
        background-image: url(${({ icon }) => icon[0]});
    }

    &:focus{
        border-color: ${({ theme }) => theme.palette.colors.primary};

        &::-webkit-calendar-picker-indicator{
        background-image: url(${({ icon }) => icon[1]});
    }
    }
    
`
export const InputLabel = styled.span`
    color: ${({ theme }) => theme.palette.text.disabled};
    font-size: 1.1em;
    margin: ${({ theme }) => theme.dimensions.margin.marginLabel}
`