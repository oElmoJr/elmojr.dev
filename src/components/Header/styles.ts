import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    text-align: center;
`;

export const Image = styled.img`
    width: 173px;
    height: 173px;
    margin-bottom: 20px;
`;

export const Title = styled.h1`
    font-family: 'Aleo', serif;
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    color: #FFFFFF;

    span {
        color: #FFC412;
    }
`;

export const Subtitle = styled.p`
    font-size: 20px;
    line-height: 23px;
    color: #FFC412;

`;