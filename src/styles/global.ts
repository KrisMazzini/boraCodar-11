import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        font-size: 62.5%;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, input, button {
        font-family: 'Titillium Web', sans-serif;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 2.4rem;
    }
`
