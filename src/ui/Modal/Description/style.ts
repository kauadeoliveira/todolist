import styled from "styled-components";

interface DescriptionProps {
    width: string
}

export const DescriptionWrapper = styled.div<DescriptionProps>`
    width: ${({ width }) => width};
    display: flex;
    flex-direction: column;
    textarea{
        background-color: ${({ theme }) => theme.palette.background.secondary};
        border: 1px solid ${({ theme }) => theme.palette.background.secondary};
        border-radius: ${({ theme }) => theme.dimensions.borderRadius.inputs};
        width: 100%;
        resize: none;
        outline: none;
        padding: 8px;
        color: #fff;

        &:focus{
            border-color: ${({ theme }) => theme.palette.colors.primary};
        }
    }

    span{
        color: ${({ theme }) => theme.palette.text.disabled};
        font-size: 1.1em;
        margin: ${({ theme }) => theme.dimensions.margin.marginLabel}
    }
`