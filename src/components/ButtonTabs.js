import React from 'react';
import styled from 'styled-components';

function ButtonTabs({ Icon, text, color, isActive, onClick }) {
    return (
        <Container color={color} isActive={isActive} onClick={onClick}>
            <img src={Icon} height={22} className={isActive ? `filter-${'pink'}` : ''} />
            {text}
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 4.4rem;
    width: 5rem;
    background-color: #ececec;
    justify-content: center;
    align-items: center;
    color: ${({ color, isActive }) => {
        if (isActive) {
            return '#FF6B6B';
        }
        return 'grey';
    }};
    font-size: .7rem;
    border-radius: 1rem;
    box-shadow: 3px 2px 9px 3px #8f8f8f4f;
    cursor: pointer;
    
    .filter-pink {
        filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(313deg) brightness(118%) contrast(119%);
    }

    .filter-blue {
        filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(200deg) brightness(118%) contrast(119%);
    }

    img {
        filter: ${({ color, isActive }) => (isActive && color ? '' : 'grayscale(50%)')};
    }
    @media (max-width: 768px) {
        height: 3.7rem;
        width: 4rem;
        font-size:.6rem;
    }

    transition:.3s;
    &:hover{
        transform:scale(1.04);

    }
`;

export default ButtonTabs;
