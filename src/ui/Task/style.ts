import styled from "styled-components";

interface PriorityProps {
    priorityColor: string
}

export const TaskWrapper = styled.div`
    display: flex;
    background-color: ${({ theme }) => theme.palette.background.secondary};
    width: 100%;
    height: 50px;
    border-radius: 5px;
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