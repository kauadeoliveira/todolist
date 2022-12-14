import { TaskTypes } from "../../store/tasksSlice"
import { TaskContent, TaskPriority, TaskWrapper } from "./style"

export default function Task({ title, description, priority, completed, date }: TaskTypes) {
    return(
        <TaskWrapper>
            <TaskPriority priorityColor={priority}/>
            <TaskContent>
                <div>
                    <span className="task-title">{title}</span>
                    <span className="task-description">{description}</span>
                </div>
                <span className="task-date">{date}</span>
            </TaskContent>
        </TaskWrapper>
    )
}