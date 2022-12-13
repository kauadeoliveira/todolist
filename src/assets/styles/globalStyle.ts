import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body{
        background-color: black;
        padding: 1rem;
        font-size: 10px;
        font-family: sans-serif;
        color: ${({ theme }) => theme.palette.text.primary}
    }
`