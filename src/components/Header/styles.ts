import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template:
        "pic blank"
        "pic title"
        "pic subtitle"
    ;
    
    align-items: flex-end;

    @media (max-width: 768px) {
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
    }
`;

export const Image = styled.img`
    grid-area: pic;
    
    border: 1px solid #FFFFFF;
    border-radius: 28px;
    
    width: 118px;
    height: 118px;
    margin-right: 25px;
    
    @media (max-width: 768px) {
        width: 212px;
        height: 212px;
        margin: 0 0 20px 0;
    }

`;

export const Subtitle = styled.p`
    grid-area: subtitle;
    
    font-size: 16px;
    line-height: 27px;
    text-align: center;
    
    background-color: #FFC412;
    color: #000;
    border-radius: 50px;

    width: 174px;
    height: 27px;

    @media (max-width: 768px) {
        width: 170px;
        height: 27px;
    }
`;