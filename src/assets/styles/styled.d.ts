import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme{
        title: string;
        palette: {
            colors: {
                primary: string;
                secondary: string;
            },
            background: {
                primary: string;
                secondary: string;
            },
            text: {
                primary: string;
            }
        },
    }
}