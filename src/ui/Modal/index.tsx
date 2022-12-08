import { Backdrop, ModalHeader, ModalWrapper } from "./style";

export default function Modal() {
    return(
        <Backdrop>
            <ModalWrapper>
                <ModalHeader></ModalHeader>
            </ModalWrapper>
        </Backdrop>
    )
}