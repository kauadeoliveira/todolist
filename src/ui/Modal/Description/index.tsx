import React from "react";
import { DescriptionWrapper } from "./style";

interface TextareaProps {
    placeholder: string;
    label: string;
    width: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export default function Description({ placeholder, label, width, onChange }: TextareaProps) {
    return(
        <DescriptionWrapper width={width}>
            <span>{label}n</span>
            <textarea 
            cols={3} 
            rows={1} 
            maxLength={60}
            placeholder={placeholder}
            onChange={onChange}
        />
        </DescriptionWrapper>
    )
}