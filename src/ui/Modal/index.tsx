import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../Input";
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
    const handleModal = () => {
        dispatch(open())
        setErrorTitle(false)
    };


    // Add tasks
    const [title, setTitle] = useState<String>();
    const [date, setDate] = useState<String>();
    const [description, setDescription] = useState<String>();
    const [priority, setPriority] = useState<String>();

    const [errorTitle, setErrorTitle] = useState<Boolean>();

    const { allTasks } = useSelector((state: State) => state.tasks);
    const { addTask } = tasksSlice.actions

    const handleTitle = (e:React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
    const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => setDate(e.target.value);
    const handleDescription = (e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value);
    const handlePriority = (e: React.ChangeEvent<HTMLInputElement>) => setPriority(e.target.value)
    
    const createTask = () => {
        if(title){
            dispatch(addTask({title, date, description, priority}))
            handleModal()
        }
        else{
            setErrorTitle(true)
        }
    }

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
                     errorMsg={errorTitle ? 'Title task is required.' : ''}
                    />
                    <Input 
                     type="date"
                     label="Due date"
                     width="100%"
                     onChange={handleDate}
                    />
                    <Input 
                     type="text"
                     label="Description"
                     placeholder="Description"
                     width="100%"
                     maxLength={80}
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