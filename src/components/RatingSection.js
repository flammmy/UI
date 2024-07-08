import React from 'react';
import styled from 'styled-components';
import IQLogo from '../icons/Vector.png';
import AppealLogo from '../icons/Vector2.png';
import SocialLogo from '../icons/Vector3.png';
import HumanityLogo from '../icons/Vector4.png';

const RatingSection = () => {
    return (
        <RatingContainer>
            <MainRating>
                <div className='vibe'>(0.0 Vibes)</div>
                <Rating>4.2</Rating>
            </MainRating>
            <SubRatings>
                <SubRating>
                    <Label>IQ</Label>

                    <Dots src={IQLogo} alt="IQ Dots" />
                    <Value>3.5</Value>
                </SubRating>
                <SubRating>
                    <Label>Appeal</Label>

                    <Dots src={AppealLogo} alt="Appeal Dots" />
                    <Value>4.0</Value>
                </SubRating>
                <SubRating>
                    <Label>Social</Label>

                    <Dots src={SocialLogo} alt="Social Dots" />
                    <Value>4.2</Value>
                </SubRating>
                <SubRating>
                    <Label>Humanity</Label>

                    <Dots src={HumanityLogo} alt="Humanity Dots" />
                    <Value>3.8</Value>
                </SubRating>
            </SubRatings>
        </RatingContainer>
    );
};

export default RatingSection;

const RatingContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 20px 0;
`;

const MainRating = styled.div`
    text-align: center;
    width: 6rem;
    margin-top: auto;
`;

const Rating = styled.div`
    font-size: 1.2rem;
    font-weight: bold;
`;

const SubRatings = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 10px;
`;

const SubRating = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

const Dots = styled.img`
    width: 2.7rem;
    height: 1.5rem;
`;

const Label = styled.div`
    margin-top: 5px;
    font-weight: 500;
`;

const Value = styled.div`
    font-size: .76rem;
    margin-top: -1rem;
`;
