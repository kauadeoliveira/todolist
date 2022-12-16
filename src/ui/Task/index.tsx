import { Id } from "@reduxjs/toolkit/dist/tsHelpers"
import { TaskTypes } from "../../store/tasksSlice"
import CheckTask from "./CheckTask"
import { TaskContent, TaskPriority, TaskWrapper } from "./style"


export default function Task({ title, priority, completed, date, id }: TaskTypes) {
    return(
        <TaskWrapper>
            <TaskPriority priorityColor={priority}/>
            <TaskContent>
                <span className="task-title">{title}</span>
                <span className="task-date">{date}</span>
            </TaskContent>
            <CheckTask id={id.toString()}/>
        </TaskWrapper>
    )
}