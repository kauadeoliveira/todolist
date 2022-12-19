import { CheckTaskWrapper } from "./style"
import { tasksSlice, TaskTypes } from "../../../store/tasksSlice"
import check from "../../../assets/images/check.png"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
interface CheckTaskProps {
    id: number
}

interface AllTasksExample {
    title: string;
    id: number;
    date: string
    priority: 'high' | 'middle' | 'low';
    completed: boolean;
}

export default function CheckTask({ id }: CheckTaskProps) {
    const { removeTask } = tasksSlice.actions;
    const dispatch = useDispatch();
    const teste = (e: React.ChangeEvent<HTMLInputElement>) => e.target.checked ? dispatch(removeTask(id)) : false;

    // function removeTask(id: number) {
    //     const arrayTasks = [
    //         {title: 'primeira', id: 1, priority: 'high'},
    //         {title: 'segunda', id: 2, priority: 'high'},
    //         {title: 'terceira', id: 3, priority: 'high'},
    //     ]

    //     const newArray = arrayTasks.filter(task => task.id === id ? false : true)

    //     return newArray
    // }

    // useEffect(() => console.log(removeTask(1)), [])
    return(
        <CheckTaskWrapper checkIcon={check}>
                <input type="checkbox" onChange={teste} id={id.toString()}/>
                <label htmlFor={id.toString()}></label>
        </CheckTaskWrapper>
    )
}