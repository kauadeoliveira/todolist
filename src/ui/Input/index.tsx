import React, { useState } from "react"
import { InputLabel, InputWrapper, MyInput } from "./style"
import calendarIcon from "../../assets/images/calendar-icon.png"
import calendarPurpleIcon from "../../assets/images/calendar-purple-icon.png"

interface InputProps {
    type?: string
    value?: string
    placeholder?: string
    label: string
    width: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void 
}


export default function Input({ type, value, placeholder, label, width, onChange }: InputProps ) {
    return(
        <InputWrapper width={width}>
            <InputLabel>{label}</InputLabel>
            <MyInput
             width={width}
             type={type}
             value={value}
             placeholder={placeholder}
             icon={[calendarIcon, calendarPurpleIcon]}
             onChange={onChange}
            />
        </InputWrapper>
    )
}