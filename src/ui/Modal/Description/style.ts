import styled from "styled-components";

interface DescriptionProps {
    width: string
}

export const DescriptionWrapper = styled.div<DescriptionProps>`
    display: flex;
    flex-direction: column;
    width: ${({ width }) => width};
    textarea{
        width: 100%;
        resize: none;
        outline: none;
        border: none;
        border-radius: 10px;
        background-color: ${({ theme }) => theme.palette.background.secondary};
        padding: 8px;
    }

    span{
        margin-left: 5px;
        font-size: .9rem;
    }
`