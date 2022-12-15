import { TaskTypes } from "../../store/tasksSlice"
import { TaskContent, TaskPriority, TaskWrapper } from "./style"

export default function Task({ title, priority, completed, date }: TaskTypes) {
    return(
        <TaskWrapper>
            <TaskPriority priorityColor={priority}/>
            <TaskContent>
                <span className="task-title">{title}</span>
                <span className="task-date">{date}</span>
            </TaskContent>
        </TaskWrapper>
    )
}