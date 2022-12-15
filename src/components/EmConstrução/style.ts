import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    h1 {
        @media (max-width: 768px) {
            font-size: 30px;
        }
    }
`;