import styled from "styled-components";

export const Job = styled.p`
    grid-area: subtitle;
    
    font-family: 'Roboto';
    font-size: 14px;
    line-height: 27px;
    text-align: center;
    
    background-color: #FFC412;
    color: #000;
    border-radius: 50px;

    width: 151px;
    height: 27px;

    @media (max-width: 768px) {
        width: 170px;
        height: 27px;
    }
`;