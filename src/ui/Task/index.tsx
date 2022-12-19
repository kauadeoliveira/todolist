import { Id } from "@reduxjs/toolkit/dist/tsHelpers"
import { useEffect } from "react"
import { TaskTypes } from "../../store/tasksSlice"
import { formatDate } from "../../utils/formatDate"
import CheckTask from "./CheckTask"
import { TaskContent, TaskPriority, TaskWrapper } from "./style"


export default function Task({ title, priority, date, id }: TaskTypes) {
    return(
        <TaskWrapper>
            <TaskPriority priorityColor={priority}/>
            <TaskContent>
                <span className="task-title">{title}</span>
                <span className="task-date">{formatDate(date)}</span>
            </TaskContent>
            <CheckTask id={id}/>
        </TaskWrapper>
    )
}