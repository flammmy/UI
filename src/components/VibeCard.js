import React from 'react';
import styled from 'styled-components';
import Post from '../icons/Post.webp'


const VibeCard = ({ name, number, image }) => {
    return (
        <Card>
            <CardImage src={Post} alt={name} />
            <CardContent>
                <Number>{number}</Number>
                <Name>{name}</Name>
                <Button>Let's Vibe</Button>
            </CardContent>
        </Card>
    );
};

export default VibeCard;

const Card = styled.div`
    position: relative;
    height: 10rem;
    width: 6rem;
    border-radius: 4px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

const CardImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
`;

const CardContent = styled.div`
    position: relative;
    z-index: 2;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
    color: white;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Number = styled.div`
    position: absolute;
    top: 35px;
    left: -3px;
    font-size: 3.0rem;
    color: rgb(255 255 255 / 0%);
    -webkit-text-stroke: 1px white;
`;

const Name = styled.div`
    font-size: 1rem;
    margin-top: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

`;

const Button = styled.button`
    padding: 3px 6px;
    border: none;
    border-radius: .8rem;
    background: linear-gradient(117deg, rgba(0, 202, 255, 1) 19%, rgba(16, 80, 139, 1) 43%, rgba(16, 80, 139, 1) 54%, rgba(0, 224, 255, 1) 100%);
    color: #ffffff8f;
    font-size: .6rem;
    cursor: pointer;
    transition: background-color 0.3s;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);


    &:hover {
        background-color: #0088cc;
    }
`;
