import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    h1 {
        font-size: 70px;

        @media (max-width: 768px) {
            font-size: 30px;
        }
    }
`;