import { TaskTypes } from "../../store/tasksSlice"
import { formatDate } from "../../utils/formatDate"
import CheckTask from "../CheckTask"
import { CompletedContent, CompletedPriority, CompletedWrapper } from "./style"
export default function TaskCompleted({ title, priority, date, id, completed }: TaskTypes) {
    return(
        <CompletedWrapper>
            <CompletedPriority/>
            <CompletedContent>
                <span className="task-title">{title}</span>
                <span className="task-date">{formatDate(date)}</span>
            </CompletedContent>
            <CheckTask id={id} completed={completed}/>
        </CompletedWrapper>
    )
}