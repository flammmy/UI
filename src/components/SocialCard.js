import React from 'react';
import styled from 'styled-components';

const SocialCard = () => {
    return (
        <Container>
            <Stats>
                <Stat first>
                    <Value>15</Value>
                    <Label>Inner</Label>
                </Stat>
                <Separator />
                <Stat second>
                    <Value>2.3k</Value>
                    <Label>Outer</Label>
                </Stat>
                <Separator />
                <Stat third>
                    <Value>2.3k</Value>
                    <Label>Universe</Label>
                </Stat>
            </Stats>
        </Container>
    );
};

export default SocialCard;

const Container = styled.div`
    display: flex;
    margin-top: 10px;
    @media (max-width: 768px) {
        justify-content: center;
    }
`;

const Stats = styled.div`
    display: flex;
    align-items: center;
    background: #f5f5f5;
    border-radius: 15px;
    padding: 7px 20px;
`;

const Stat = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 10px;
    color: ${({ first, second, third }) => {
        if (first) return '#333'; 
        if (second) return '#666'; 
        if (third) return '#999'; 
        return '#000';
    }};
`;

const Value = styled.div`
    font-size: 1.2em;
    font-weight: bold;
`;

const Label = styled.div`
    font-size: 0.9em;
`;

const Separator = styled.div`
    height: 20px;
    width: 1px;
    background: #ddd;
`;
