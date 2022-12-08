import React from "react"
import { InputIcon, InputLabel, InputWrapper } from "./style"

import searchIcon from "../../assets/images/search-icon.png"

interface InputProps {
    type: string
    value?: string
    placeholder?: string
    label: string
    icon?: string
    width: string
}

export default function Input({ type, value, placeholder, label, icon, width }: InputProps ) {
    const handleValue = (e: React.ChangeEvent<HTMLInputElement>): void => console.log(typeof e.target.value)
    return(
        <div>
            <InputLabel>{label}</InputLabel>
            <InputWrapper width={width}>
                <input
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    onChange={handleValue}
                />
                <InputIcon src={icon} />
            </InputWrapper>
        </div>
    )
}