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

    h1 {
        font-size: 70px;
        line-height: 70px;
    }
    
    img {
        height: 118px;
        width: 118px;
        margin-right: 25px;

        @media (max-width: 768px) {
           width: 212px;
            height: 212px;
            margin: 0 0 20px 0;
    }
    }
`;

