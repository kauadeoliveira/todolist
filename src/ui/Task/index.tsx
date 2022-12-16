import { Id } from "@reduxjs/toolkit/dist/tsHelpers"
import { useEffect } from "react"
import { TaskTypes } from "../../store/tasksSlice"
import CheckTask from "./CheckTask"
import { TaskContent, TaskPriority, TaskWrapper } from "./style"


export default function Task({ title, priority, completed, date, id }: TaskTypes) {
    const formatDate = (date: string): string => {
        const dateArray = date.split('-')
        const taskDate: number[] = dateArray.map(num => Number(num))
        const year: number = taskDate[0];
        const month: number = taskDate[1] - 1;
        const day: number = taskDate[2];
        const format = `${dateArray[2]}/${dateArray[1]}/${dateArray[0]}`
        const dayName = new Date(year, month, day).toString().split(' ')[0]
        return `${dayName} • ${format}`
    } 

    return(
        <TaskWrapper>
            <TaskPriority priorityColor={priority}/>
            <TaskContent>
                <span className="task-title">{title}</span>
                <span className="task-date">{formatDate(date)}</span>
            </TaskContent>
            <CheckTask id={id.toString()}/>
        </TaskWrapper>
    )
}