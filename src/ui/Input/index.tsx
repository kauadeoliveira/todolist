import React, { useState } from "react"
import { ErrorMessage, InputLabel, InputWrapper, MyInput } from "./style"
import calendarIcon from "../../assets/images/calendar-icon.png"
import calendarPurpleIcon from "../../assets/images/calendar-purple-icon.png"

interface InputProps {
    type?: string;
    value?: string;
    placeholder?: string;
    label: string;
    width: string;
    maxLength?: number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    errorMsg?: string; 
}


export default function Input({ type, value, placeholder, label, width, maxLength, onChange, errorMsg }: InputProps ) {
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
             maxLength={maxLength}
            />
            <ErrorMessage>{errorMsg}</ErrorMessage>
        </InputWrapper>
    )
}