import { CheckTaskWrapper } from "./style"
import { tasksSlice, TaskTypes } from "../../store/tasksSlice"
import check from "../../assets/images/check.png"
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
interface CheckTaskProps {
    id: number,
    completed: boolean
}

interface AllTasksExample {
    title: string;
    id: number;
    date: string
    priority: 'high' | 'middle' | 'low';
    completed: boolean;
}

export default function CheckTask({ id, completed }: CheckTaskProps) {
    const { completeTask } = tasksSlice.actions;
    const { incompleteTask } = tasksSlice.actions;
    const dispatch = useDispatch();
    const checkboxRef = React.createRef<HTMLInputElement>()
    
    const teste = (e: React.ChangeEvent<HTMLInputElement>) => e.target.checked ? dispatch(completeTask(id)) : dispatch(incompleteTask(id));

    useEffect(() => console.log(completed), completed)

    return(
        <CheckTaskWrapper checkIcon={check}>
                <input type="checkbox" onChange={teste} id={id.toString()} ref={checkboxRef}/>
                <label htmlFor={id.toString()}></label>
        </CheckTaskWrapper>
    )
}