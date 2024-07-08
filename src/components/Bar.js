import React, { useState } from 'react';
import styled from 'styled-components';
import Icon1 from '../icons/People.svg';
import Icon2 from '../icons/Content.svg';
import Icon3 from '../icons/Community.svg';
import Icon4 from '../icons/Offer.svg';
import Icon5 from '../icons/Diary.svg';

const Bar = ({ color }) => {
    const [activeTab, setActiveTab] = useState('Truth');

    const tabs = ['Truth', 'Fun', 'Debate', 'Opportunity'];
    const icons = [
        { icon: Icon1, text: 'SEARCH' },
        { icon: Icon2, text: 'ACHIEVEMENTS' },
        { icon: Icon3, text: 'AWARDS' },
        { icon: Icon4, text: 'EDUCATION' },
        { icon: Icon5, text: 'EXPERIENCE' },
    ];

    const getColor = (color) => {
        switch (color) {
            case 'pink':
                return '#FF6B6B';
            case 'blue':
                return '#6B6BFF';
            default:
                return '#000';
        }
    };

    return (
        <Container>
            <Tabs>
                {tabs.map(tab => (
                    <Tab
                        key={tab}
                        active={activeTab === tab}
                        color={getColor(color)}
                        onClick={() => setActiveTab(tab)}
                    >
                        <img src={icons[tabs.indexOf(tab)].icon} alt={tab} />
                        {tab}
                    </Tab>
                ))}
            </Tabs>
        </Container>
    );
};

export default Bar;

const Container = styled.div`
    width: 65%;
    padding: 10px 20px;
    @media (max-width: 768px) {
        width: 100%;
        padding: 10px 10px;
    }
`;

const Tabs = styled.div`
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;
    @media (max-width: 768px) {
        justify-content: space-between;
        margin-bottom: 10px;
    }
`;

const Tab = styled.div`
    padding: 10px 20px;
    cursor: pointer;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: ${({ active, color }) => (active ? color : 'grey')};
    border-bottom: ${({ active, color }) => (active ? `2px solid ${color}` : 'none')};
    font-weight: ${({ active }) => (active ? 'bold' : '500')};
    gap: 0.7rem;
    font-size: 0.8rem;
    transition: color 0.3s, border-bottom 0.3s;

    img {
        height: 1.1rem;
        filter: ${({ active, color }) => (active ? (color === '#FF6B6B' ? 'invert(48%) sepia(79%) saturate(2476%) hue-rotate(313deg) brightness(118%) contrast(119%)' : 'invert(48%) sepia(79%) saturate(2476%) hue-rotate(200deg) brightness(118%) contrast(119%)') : 'grayscale(100%)')};
        transition: filter 0.3s;
    }

    @media (max-width: 768px) {
        padding: 5px 10px;
        font-size: 0.7rem;
    }
`;
