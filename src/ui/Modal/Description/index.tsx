import { DescriptionWrapper } from "./style";

export default function Description() {
    return(
        <DescriptionWrapper>
            <span>Task description</span>
            <textarea cols={30} rows={5}></textarea>
        </DescriptionWrapper>
    )
}