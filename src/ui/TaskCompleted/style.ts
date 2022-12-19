import styled from "styled-components";

export const CompletedWrapper = styled.div`
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.palette.background.secondary};
    width: 100%;
    height: 40px;
    border-radius: 5px;
    cursor: default;
    padding-right: 5px;
`

export const CompletedContent = styled.div`
    padding: 10px;
    width: 100%;
    height: 100%;    
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3px;
    
    .task-title{
        font-size: 1.2em;
        font-weight: bold;
    }

    .task-date{
        font-size: 1.1em;
        color: ${({ theme }) => theme.palette.text.disabled}
    }
`