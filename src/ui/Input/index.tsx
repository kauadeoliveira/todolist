import React, { useState } from "react"
import { ErrorMessage, InputLabel, InputWrapper, MyInput } from "./style"
import calendarIcon from "../../assets/images/calendar-icon.png"
import calendarPurpleIcon from "../../assets/images/calendar-purple-icon.png"

interface InputProps {
    type?: string;
    value?: string | undefined;
    placeholder?: string;
    label: string;
    width: string;
    maxLength?: number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    errorMsg?: string; 
}


const Input = React.forwardRef<HTMLInputElement, InputProps>(({ type, label, width, errorMsg, maxLength, onChange, placeholder, value }, ref) => {
    return(
        <InputWrapper width={width}>
            <InputLabel>{label}</InputLabel>
            <MyInput
             ref={ref}
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
})

export default Input