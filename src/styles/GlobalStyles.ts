import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {    
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
        text-decoration: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        font-family: Roboto;
    }
    
    #root {
        display: flex;
        flex-direction: column;
        height: 100vh;
    };
    
    body {
        background-color: #202020;
        color: #E5E6E0;
        
        height: 100%;
    }
`;
