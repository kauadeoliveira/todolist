import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme{
        title: string;
        palette: {
            colors: {
                primary: {
                    light: string;
                    main: string;
                    dark: string;
                }
                secondary: string;

                priority: {
                    high: string,
                    middle: string,
                    low: string
                },

                taskCompleted: {
                    light: string;
                    main: string;
                    dark: string;
                },
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