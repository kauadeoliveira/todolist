import styled from "styled-components";

interface InputIconProps {
    src?: string
}

export const InputWrapper = styled.div`
    background-color: white;
    border: 1px solid black;
    border-radius: 10px;
    width: 70%;
    padding: 2px;
    display: flex;
    gap: 5px;
    input{
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
    font-size: .9rem;
`