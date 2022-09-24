import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    
    @media (max-width: 768px) {
        flex-wrap: wrap;
    }

    a {
        @media (max-width: 768px) {
            margin-bottom: 15px;
        }
    }
`;

export const Icon = styled.img`
    width: 60px; 
    height: 60px;
    transition: transform ease-in-out 100ms;
    
    &:hover {
        transform: scale(1.1);
    }
`;