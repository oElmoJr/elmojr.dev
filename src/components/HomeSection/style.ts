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

    h1 {
        letter-spacing: 0.05em;
        font-size: 96px;
        line-height: 100px;
    }

    p {
        font-size: 20px;
        width: 210px;
        height: 35px;
        line-height: 35px;
    }
`;
