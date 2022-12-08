import { DescriptionWrapper } from "./style";

interface DescriptionProps {
    placeholder?: string; 
    width: string
}

export default function Description({ placeholder, width }: DescriptionProps) {
    return(
        <DescriptionWrapper width={width}>
            <span>Task description</span>
            <textarea 
            cols={30} 
            rows={5} 
            placeholder={placeholder}
        />
        </DescriptionWrapper>
    )
}