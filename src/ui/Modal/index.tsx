import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../Input";
import Description from "./Description";
import { Backdrop, ModalButton, ModalContent, ModalHeader, ModalWrapper, TaskPriority } from "./style";
import { store } from "../../store/store";
import { modalSlice } from "../../store/modalSlice";
import { tasksSlice } from "../../store/tasksSlice";

type State = ReturnType<typeof store.getState>

export default function Modal() {
    const dispatch = useDispatch();

    // Open/Close Modal
    const { openModal } = useSelector((state: State) => state.modal);
    const { open } = modalSlice.actions;
    const handleModal = () => dispatch(open());


    // Add tasks
    const [title, setTitle] = useState<String>();
    const [date, setDate] = useState<String>();
    const [description, setDescription] = useState<String>();
    const [priority, setPriority] = useState<String>();

    const { allTasks } = useSelector((state: State) => state.tasks);
    const { addTask } = tasksSlice.actions

    const handleTitle = (e:React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
    const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => setDate(e.target.value);
    const handleDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value);
    const handlePriority = (e: React.ChangeEvent<HTMLInputElement>) => setPriority(e.target.value)
    const createTask = () => dispatch(addTask({title, date, description, priority}))

    // store.dispatch(() => console.log(store.getState()))

    return(
        <Backdrop close={openModal}>
            <ModalWrapper>
                <ModalHeader>
                    <span>New Task</span>
                    <div className="close-icon" onClick={handleModal}>x</div>
                </ModalHeader>
                <ModalContent>
                    <Input 
                     type="text"
                     label="Task title"
                     placeholder="Title"
                     width="100%"
                     onChange={handleTitle}
                    />
                    <Input 
                     type="date"
                     label="Due date"
                     width="100%"
                     onChange={handleDate}
                    />
                    <Description 
                     placeholder="Description"
                     width="100%"
                     label="Description"
                     onChange={handleDescription}
                    />
                    <TaskPriority>
                        <input type="radio" name="task_priority" id="high" value="high" onChange={handlePriority}/>
                        <label htmlFor="high" className="high">High</label>

                        <input type="radio" name="task_priority" id="middle" value="middle" onChange={handlePriority}/>
                        <label htmlFor="middle" className="middle">Middle</label>

                        <input type="radio" name="task_priority" id="low" value="low" onChange={handlePriority}/>
                        <label htmlFor="low" className="low">Low</label>
                    </TaskPriority>
                </ModalContent>
                <ModalButton onClick={createTask}>Create Task</ModalButton>
            </ModalWrapper>
        </Backdrop>
    )
}