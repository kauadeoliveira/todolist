import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../Input";
import { Backdrop, ModalButton, ModalContent, ModalHeader, ModalWrapper, TaskPriority } from "./style";
import { store } from "../../store/store";
import { modalSlice } from "../../store/modalSlice";
import { tasksSlice } from "../../store/tasksSlice";
import { State } from "../../App";


export default function Modal() {
    const dispatch = useDispatch();
    
    // Refs
    const titleRef = React.createRef<HTMLInputElement>();
    const dateRef = React.createRef<HTMLInputElement>();
    const descriptionRef = React.createRef<HTMLInputElement>();
    

    // Inputs
    const [titleErrorMsg, setTitleErrorMsg] = useState<Boolean>();

    const handleResetInputValues = () => {
        if(titleRef.current?.value != undefined && dateRef.current?.value != undefined){
            titleRef.current.value = '';
            dateRef.current.value = '';
        }

        setTitle(titleRef.current?.value)
        setDate(dateRef.current?.value)
        setPriority(undefined)
    }


    // Open and Close Modal
    const { openModal } = useSelector((state: State) => state.modal);
    const { open } = modalSlice.actions;

    const handleModal = () => {
        handleResetInputValues()
        dispatch(open())
        setTitleErrorMsg(false)
    };


    // Add tasks
    const [title, setTitle] = useState<String>();
    const [date, setDate] = useState<String>();
    const [priority, setPriority] = useState<String>();

    const { addTask } = tasksSlice.actions

    const handleTitle = () => setTitle(titleRef.current?.value);
    const handleDate = () => setDate(dateRef.current?.value);
    const handlePriority = (e: React.ChangeEvent<HTMLInputElement>) => setPriority(e.target.value);
    
    const createTask = () => {
        if(title != '' && title != undefined){
            dispatch(addTask({title, date, priority}));
            handleModal();
        }else{
            setTitleErrorMsg(true);
        }
    }

    store.dispatch(() => console.log(store.getState()))

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
                     errorMsg={titleErrorMsg ? 'Title task is required.' : ''}
                     ref={titleRef}
                    />
                    <Input 
                     type="date"
                     label="Due date"
                     width="100%"
                     onChange={handleDate}
                     ref={dateRef}
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