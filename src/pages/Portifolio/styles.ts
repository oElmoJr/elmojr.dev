import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;

    h1 {
        font-family: 'Aleo', serif;
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 48px;
        color: #FFFFFF;
    };

    button {
        cursor: pointer;
        margin-top: 20px;
        padding: 5px 10px;
    }

`;