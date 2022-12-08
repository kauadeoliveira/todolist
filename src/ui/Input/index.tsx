import React from "react"
import { InputIcon, InputWrapper } from "./style"

import searchIcon from "../../assets/images/search-icon.png"

interface InputProps {
    id: string
    type: string
    value?: string
    placeholder?: string
    label: string
    icon?: string
}

export default function Input({ type, value, placeholder, id, label, icon }: InputProps ) {
    const handleValue = (e: React.ChangeEvent<HTMLInputElement>): void => console.log(typeof e.target.value)
    return(
        <InputWrapper>
            <InputIcon src={icon} />
            <input 
             id={id}
             type={type}
             value={value}
             placeholder={placeholder}
             onChange={handleValue}
            />
        </InputWrapper>
    )
}