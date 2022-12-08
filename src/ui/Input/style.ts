import styled from "styled-components";

interface InputProps {
    width: string
    src?: string;
}

type InputIconProps = Pick<InputProps, "src">

export const InputWrapper = styled.div<InputProps>`
    background-color: ${({ theme }) => theme.palette.background.secondary};
    width: ${({ width }) => width};
    border: 1px solid black;
    border-radius: 5px;
    padding: 8px;
    display: flex;
    gap: 5px;
    input{
        color: ${({ theme }) => theme.palette.text.primary};
        width: 100%;
        outline: none;
        border: none;
        background: none;
    }
`
export const InputIcon = styled.div<InputIconProps>`
    display: ${({ src }) => src ? 'block' : 'none'};
    background-image: url(${({ src }) => src});
    background-repeat: no-repeat;
    background-size: cover;
    width: 15px;
    height: 15px;
    cursor: pointer;
`
export const InputLabel = styled.span`
    font-weight: bold;
    font-size: .8rem;
    margin-left: 5px;
`