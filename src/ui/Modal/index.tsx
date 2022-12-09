import Input from "../Input";
import Description from "./Description";
import { Backdrop, ModalButton, ModalContent, ModalHeader, ModalWrapper } from "./style";

export default function Modal() {
    return(
        <Backdrop>
            <ModalWrapper>
                <ModalHeader>
                    <span>New Task</span>
                    <div className="close-icon">x</div>
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