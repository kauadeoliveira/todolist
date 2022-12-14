import { TaskTypes } from "../../store/tasksSlice"
import { TaskPriority, TaskWrapper } from "./style"

export default function Task({ title, description, priority, completed }: TaskTypes) {
    return(
        <TaskWrapper>
            <TaskPriority priorityColor={priority}/>
        </TaskWrapper>
    )
}