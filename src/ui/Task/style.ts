import styled from "styled-components";

interface PriorityProps {
    priorityColor: string
}

export const TaskWrapper = styled.div`
    display: flex;
    background-color: ${({ theme }) => theme.palette.background.secondary};
    width: 100%;
    height: 40px;
    border-radius: 5px;
    cursor: default;
`

export const TaskPriority = styled.div<PriorityProps>`
    background-color: ${({priorityColor, theme}) => {
        switch(priorityColor){
            case 'high': 
                return theme.palette.colors.priority.high;
                break;
            case 'middle':
                return theme.palette.colors.priority.middle;
                break;
            case 'low':
                return theme.palette.colors.priority.low;
                break;
        }
    }};
    height: 100%;
    width: 10px;
    border-top-left-radius: inherit;
    border-bottom-left-radius: inherit;
`

export const TaskContent = styled.div`
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