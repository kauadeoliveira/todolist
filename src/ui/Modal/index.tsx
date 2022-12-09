import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../Input";
import Description from "./Description";
import { Backdrop, ModalButton, ModalContent, ModalHeader, ModalWrapper } from "./style";
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
                </ModalContent>
                <ModalButton>Create Task</ModalButton>
            </ModalWrapper>
        </Backdrop>
    )
}