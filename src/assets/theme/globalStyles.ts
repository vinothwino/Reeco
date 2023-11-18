import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }
    *, *:before, *:after {
        box-sizing: inherit;
        margin: 0;
    }
    body {
        line-height: calc(1em + 0.5rem);
        -webkit-font-smoothing: antialiased;
        font-family: 'Roboto', sans-serif;
    }
    .d-flex{
        display:flex;
    }
    .items-center{
        align-items:center;
    }
    .justify-center{
        justify-content:center;
    }
    .justify-between{
        justify-content:space-between;
    }
`;

export default GlobalStyle