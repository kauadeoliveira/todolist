import { TaskTypes } from "../../store/tasksSlice"
import { formatDate } from "../../utils/formatDate"
import { CompletedContent, CompletedWrapper } from "./style"
export default function TaskCompleted({ title, priority, date, id }: TaskTypes) {
    return(
        <CompletedWrapper>
            <CompletedContent>
                <span className="task-title">{title}</span>
                {/* <span className="task-date">{formatDate(date)}</span> */}
            </CompletedContent>
        </CompletedWrapper>
    )
}