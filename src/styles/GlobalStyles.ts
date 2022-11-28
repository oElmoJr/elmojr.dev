import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
    * {
        box-sizing: border-box;

        font-family: 'Roboto';
        text-decoration: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        margin: 0;
        padding: 0;
    }

    #root {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        height: 100vh;
    }
    
    body {
        background-color: #202020;
        height: 100%;
    }
`;