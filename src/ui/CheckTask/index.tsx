import { tasksSlice, TaskTypes } from "../../store/tasksSlice"
import check from "../../assets/images/check.png"
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CheckTaskWrapper } from "./style";
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


    const [checkTest, setCheckTest] = useState<Boolean>(completed)
    const handleCheck = () => setCheckTest(!checkTest)
    // useEffect(() => console.log(completed), completed)

    return(
        <CheckTaskWrapper onClick={handleCheck} state={checkTest} icon={check}>
        </CheckTaskWrapper>
    )
}