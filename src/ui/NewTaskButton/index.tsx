import { Button } from "./style";
import { useSelector, useDispatch } from 'react-redux'
import { store } from "../../store/store";
import { modalSlice } from "../../store/modalSlice";

export default function NewTaskButton() {
    type State = ReturnType<typeof store.getState>
    const { openModal } = useSelector((state: State) => state.modal)
    const dispatch = useDispatch()
    const { open } = modalSlice.actions
    const handleModal = () => dispatch(open()) 

    store.subscribe(() => console.log(store.getState()))

    return(
        <Button onClick={handleModal}>+</Button>
    )
}