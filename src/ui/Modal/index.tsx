import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../Input";
import Description from "./Description";
import { Backdrop, ModalButton, ModalContent, ModalHeader, ModalWrapper, TaskPriority } from "./style";
import { store } from "../../store/store";
import { modalSlice } from "../../store/modalSlice";

type State = ReturnType<typeof store.getState>

export default function Modal() {
    const dispatch = useDispatch();
    const { openModal } = useSelector((state: State) => state.modal);
    const { open } = modalSlice.actions

    const handleModal = () => dispatch(open()) 


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
                    />
                    <Input 
                     type="date"
                     label="Due date"
                     width="100%"
                    />
                    <Description 
                     placeholder="Description"
                     width="100%"
                    />
                    <TaskPriority>
                        <input type="radio" name="task_priority" id="high" />
                        <label htmlFor="high" className="high">High</label>

                        <input type="radio" name="task_priority" id="middle" />
                        <label htmlFor="middle" className="middle">Middle</label>

                        <input type="radio" name="task_priority" id="low" />
                        <label htmlFor="low" className="low">Low</label>
                    </TaskPriority>
                </ModalContent>
                <ModalButton>Create Task</ModalButton>
            </ModalWrapper>
        </Backdrop>
    )
}