import Input from "../Input";
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
                    <Input type="text" placeholder="a"/>
                </ModalContent>
                <ModalButtons></ModalButtons>
            </ModalWrapper>
        </Backdrop>
    )
}