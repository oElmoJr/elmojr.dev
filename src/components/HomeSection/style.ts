import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;

    width: 512px;
    height: 100vh;
    margin: auto;
    
    @media (max-width: 768px) {
        width: 265px;
    }

    h1 {
        letter-spacing: 0.05em;
        font-size: 96px;
        line-height: 100px;
        
        @media (max-width: 768px) {
            font-size: 50px;
            line-height: 55px;
        }
    }

    p {
        font-size: 20px;
        width: 210px;
        height: 35px;
        line-height: 35px;
    }
`;
