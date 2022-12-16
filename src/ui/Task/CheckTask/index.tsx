import { CheckTaskWrapper } from "./style"
import check from "../../../assets/images/check.png"
interface CheckTaskProps {
    id: string
}


export default function CheckTask({ id }: CheckTaskProps) {
    const teste = (e: React.ChangeEvent<HTMLInputElement>) => console.log(e.target.value) 
    return(
        <CheckTaskWrapper checkIcon={check}>
                <input type="checkbox" onChange={teste} id="teste"/>
                <label htmlFor="teste"></label>
        </CheckTaskWrapper>
    )
}