import styled from "styled-components";

export const DescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    textarea{
        width: 100%;
        resize: none;
        outline: none;
        border: none;
        border-radius: 10px;
    }

    span{
        font-size: .9rem;
    }
`