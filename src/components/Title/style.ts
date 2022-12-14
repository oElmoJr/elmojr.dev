import styled from "styled-components";

export const Text = styled.h1`
    grid-area: title;
    
    font-family: 'Aleo', serif;
    font-size: 70px;
    line-height: 70px;
    
    color: #FFFFFF;

    span {
        color: #FFC412;
    }

    @media (max-width: 768px) {
        font-size: 55px;
        line-height: 55px;
    }
`;