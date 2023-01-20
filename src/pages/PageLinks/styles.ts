import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto 0;

    height: 457px;
`;

export const ProfileContainer = styled.div`
    display: flex;
    justify-content: space-between;
    
    width: 376px;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 16px;
    }
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    @media (max-width: 768px) {
            display: flex;
            flex-direction: column;
            
            
            align-items: center;
        }
`


export const LinkContainer = styled.div`
    width: 376px;   
    
    @media (max-width: 768px) {
        width: 210px;   
    }
`;

export const Button = styled.button`
    color: #fff;
    background: none;
    
    font-size: 20px;
    border: 2px solid #C4C4C4;
    border-radius: 16px; 
    cursor: pointer;
    transition: opacity ease-in-out 50ms;
    
    height: 60px;
    width: 376px;
    margin: 48px 0 16px ;
    
    &:hover {
        opacity: 0.7;
    }

    @media (max-width: 768px) {
        width: 210px;   
    }
`;
