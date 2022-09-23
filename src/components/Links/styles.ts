import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 437px;
    
    margin-top: 55px;
    
    @media (max-width: 768px) {
        width: 211px;
    }
`;

export const Button = styled.button`
    color: #fff;
    background: none;

    font-size: 20px;
    border: 2px solid #C4C4C4;
    border-radius: 10px; 
    cursor: pointer;
    transition: background-color ease-in-out 50ms;
    
    height: 60px;
    margin-bottom: 25px;
    
    &:hover {
        background-color: #2F2F2F;
    }
`;
