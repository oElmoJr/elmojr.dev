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
        background-color: ${(props) =>
          props.theme.palette.common.primary.background};
        color: ${(props) => props.theme.palette.common.primary.text};
        
        height: 100%;
    }
`;
