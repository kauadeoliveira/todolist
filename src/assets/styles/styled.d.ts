import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme{
        title: string;
        palette: {
            colors: {
                primary: string;
                secondary: string;

                priority: {
                    high: string,
                    middle: string,
                    low: string
                }
            },
            background: {
                primary: string;
                secondary: string;
            },
            text: {
                primary: string;
                disabled: string
            }
        },
        dimensions: {
            borderRadius: {
                inputs: string
            },
            margin: {
                marginLabel: string
            }
        }
    }
}