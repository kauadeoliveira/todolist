import Input from "../Input";
import Description from "./Description";
import { Backdrop, ModalButtons, ModalContent, ModalHeader, ModalWrapper } from "./style";

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
                    />

                    <Input 
                     type="date"
                     label="Due date"
                    />

                    <Description />
                </ModalContent>
                <ModalButtons></ModalButtons>
            </ModalWrapper>
        </Backdrop>
    )
}