import React, { useState } from 'react';
import styled from 'styled-components';
import Hero from '../icons/Profile.webp';
import RatingSection from '../components/RatingSection';
import SocialCard from '../components/SocialCard';
import ButtonTabs from '../components/ButtonTabs';
import People from '../icons/People.svg';
import Content from '../icons/Content.svg';
import Community from '../icons/Community.svg';
import Offer from '../icons/Offer.svg';
import Diary from '../icons/Diary.svg';
import Bar from '../components/Bar';
import IronMan from '../icons/ironman.jpeg';
import ButtonCard from '../components/ButtonCard.js';
import Slider from '../components/Slider.js';
import { FaPlus } from "react-icons/fa";
import PhotoGrid from '../components/PhotoGrid.js';

function CommunityProfile() {
    const [activeTab, setActiveTab] = useState('People');

    const tabs = [
        { icon: People, text: 'People', color: '' },
        { icon: Content, text: 'Content', color: '' },
        { icon: Community, text: 'Community', color: '' },
        { icon: Offer, text: 'Offer', color: '' }
    ];
    return (
        <Container>
            <ProfileSummary>
                <div className='profileImage'>
                    <img src={IronMan} height={130} width={130} alt="Profile" />
                    <p><LargeText>70%</LargeText> vibes match</p>
                </div>
                <div className='details'>
                    <RatingSection />
                    <div className='namesContainer'>
                        <div className='names'>
                            <p className='name'>IronMan Fanpage</p>
                            <p className='userName'>@ironmanisbest</p>
                        </div>
                        <div className='joinnow'>
                        </div>
                        <JoinNow>Join now</JoinNow>
                    </div>
                    <Stats>
                        <div>Vibers: 5.2K</div>
                        <div>Posts: 25</div>
                    </Stats>
                    <SocialCard />
                    <p className='bio'>Greatest superhero of all time. Perfect Combination of intelligence and looks.</p>
                    <Location>
                        <span role="img" aria-label="briefcase">💼  CEO, Ooumph</span>
                        <span role="img" aria-label="house">🏠  Lucknow, India</span>
                    </Location>
                </div>
            </ProfileSummary>
            <SliderRating>
                <Button>Send vibes</Button>
                <Slider />
            </SliderRating>
            <MoodContainer>
                <IconContainer>
                    <FaPlus />
                </IconContainer>
                <ButtonCard Icon={Hero} label='Sexy' />
                <ButtonCard Icon={Hero} label='Amazing' />
                <ButtonCard Icon={Hero} label='Outstanding' />
                <ButtonCard Icon={Hero} label='Sexy' />
                <ButtonCard Icon={Hero} label='Amazing' />
                <ButtonCard Icon={Hero} label='Outstanding' />
                <ButtonCard Icon={Hero} label='Sexy' />
                <ButtonCard Icon={Hero} label='Amazing' />
            </MoodContainer>
            <div className='footer'>
                <Socials>
                {tabs.map((tab) => (
                <ButtonTabs
                    key={tab.text}
                    Icon={tab.icon}
                    text={tab.text}
                    color={tab.color}
                    isActive={activeTab === tab.text}
                    onClick={() => setActiveTab(tab.text)}
                />
            ))}
                </Socials>
                <Bar color='pink' />
                <div className='tags'>
                    <ButtonCard Icon={Hero} label='MOOD' />
                    <ButtonCard Icon={Hero} label='IQ' />
                    <ButtonCard Icon={Hero} label='APPEAL' />
                    <ButtonCard Icon={Hero} label='SOCIAL' />
                    <ButtonCard Icon={Hero} label='IQ' />
                    <ButtonCard Icon={Hero} label='APPEAL' />
                    <ButtonCard Icon={Hero} label='SOCIAL' />
                    <ButtonCard Icon={Hero} label='IQ' />
                    <ButtonCard Icon={Hero} label='APPEAL' />
                    <ButtonCard Icon={Hero} label='SOCIAL' />
                </div>
            </div>
            <PhotosContainer>
                <PhotoGrid />
            </PhotosContainer>
        </Container>
    );
};

const Container = styled.div`
    font-size: .8rem;
    .footer{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        .tags{
            width: 100%;
            display: flex;
            justify-content: end;
            gap: 1.2rem;
            flex-wrap: wrap;

        }
    }
    @media (max-width: 768px) {
        .footer .tags {
            justify-content: center;
            flex-wrap: wrap;
        }
    }
`;

const ProfileSummary = styled.div`
    display: flex;
    flex-direction: row;
    color: #616060;
    .profileImage{
        width: 30%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: end;
        padding-right: 3rem;
        margin-right: 2rem;
        img{
            border-radius: 50%;
        }
        p {
            font-size: 1rem;
        }
    }
    .details{
        width: 40%;
        .namesContainer{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
    .name{
        color: black;
        font-weight: 800;
    }
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
        .profileImage {
            width: 100%;
            align-items: center;
            padding-right: 0;
            margin-right: 0;
            img {
                width: 100px;
                height: 100px;
            }
            p {
                font-size: 1.2rem;
            }
        }
        .details {
            width: 100%;
            .namesContainer {
                flex-direction: column;
                align-items: center;
            }
        }
    }
`;

const JoinNow = styled.button`
    padding: .5rem 1.2rem;
    border: none;
    color: #00bdff;
    border-radius: 1.3rem;
    font-weight: bold;
    box-shadow: 4px 5px 10px 0px #00000036;
    transition: transform 0.2s, box-shadow 0.2s;

    @media (max-width: 768px) {
        margin-bottom: 1rem;
    }

    &:hover {
        transform: scale(1.05);
        box-shadow: 4px 5px 15px 2px #00000099;
    }

    &:active {
        transform: scale(0.95);
        box-shadow: 4px 5px 8px 0px #00000066;
    }
`;
const Socials = styled.div`
    display: flex;
    justify-content: center;
    gap: 3rem;
    margin: 2.5rem 0;
`;

const SliderRating = styled.div`
    display: flex;
    gap: 2rem;
    align-items: end;
    justify-content: center;
    margin: 1rem 0;
    @media (max-width:768px){
        gap:1.4rem;
    }
`;

const Button = styled.button`
    padding: .5rem .8rem;
    border: none;
    color: grey;
    border-radius: 1.3rem;
    box-shadow: -3px -3px 10px 1px #47f8ff75;
    transition: transform 0.2s, box-shadow 0.2s;

    &:hover {
        transform: scale(1.05);
        box-shadow: -3px -3px 15px 2px #47f8ff;
    }

    &:active {
        transform: scale(0.95);
        box-shadow: -3px -3px 8px 1px #47f8ff75;
    }
    @media (max-width: 768px) {
        padding: .5rem .8rem;
        font-size: .7rem;

    }
`;

const MoodContainer = styled.div`
    margin: 2.3rem 0;
    display: flex;
    gap: 1.5rem;
    justify-content: end;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        justify-content: center;
    }
`;

const IconContainer = styled.div`
    height: 2rem;
    width: 2rem;
    background: #f5f2f2;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
        transform:scale(1.04);

    }
`;

const Stats = styled.div`
    gap: 1.3rem;
    display: flex;
    margin: 1rem 1.2rem;
    letter-spacing: .1rem;
    gap: 1.3rem;
    color: #8080808f;
    font-weight: 650;
    font-size: .7rem;
        @media (max-width: 768px) {
        justify-content: center;
        gap: 2rem;
    }
`;

const Location = styled.div`
    font-size: .7rem;
    span{
        margin-right: 2rem;
    }
    @media (max-width: 768px) {
        justify-content: center;
        span {
            margin-right: 1rem;
        }
    }
`;

const PhotosContainer = styled.div`
    width: 100%;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
`;

const LargeText = styled.span`
    font-size: 1.3rem;
    color: black;
    font-weight: 600;
`;

export default CommunityProfile;
