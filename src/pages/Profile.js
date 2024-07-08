import React, { useState } from 'react';
import styled from 'styled-components';
import Hero from '../icons/Profile.webp';
import RatingSection from '../components/RatingSection';
import SocialCard from '../components/SocialCard';
import ButtonTabs from '../components/ButtonTabs';
import People from '../icons/People.svg'
import Content from '../icons/Content.svg'
import Community from '../icons/Community.svg'
import Offer from '../icons/Offer.svg'
import Diary from '../icons/Diary.svg'
import Bar from '../components/Bar';
import ButtonCard from '../components/ButtonCard.js'
import PhotoGrid from '../components/PhotoGrid.js';

const Profile = () => {
    const [activeTab, setActiveTab] = useState('People');

    const tabs = [
        { icon: People, text: 'People', color: '' },
        { icon: Content, text: 'Content', color: '' },
        { icon: Community, text: 'Community', color: '' },
        { icon: Offer, text: 'Offer', color: '' },
        { icon: Offer, text: 'Diary', color: '' },

    ];
    return (
        <Container>

            <ProfileSummary>
                <div className='profileImage'>
                    <img src={Hero} height={100} width={100} />
                    <p>70% vibes match</p>
                </div>
                <div className='details'>
                    <RatingSection />
                    <p className='name'>Charlotte Nolan</p>
                    <p className='userName'>@charlottenolan880</p>
                    <Stats>
                        <div>Vibers: 5.2K</div>
                        <div>Posts: 25</div>
                    </Stats>
                    <SocialCard />
                    <p className='bio'>Things may come to those who wait,but only the things left by those who hustle. Things may come to those only who wait</p>
                    <Location>
                        <span role="img" aria-label="briefcase">💼</span> CEO, Ooumph
                        <span role="img" aria-label="house">🏠</span> Lucknow, India
                    </Location>
                </div>
            </ProfileSummary>
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
                <Bar color='pink'/>
                <div className='tags'>
                    <ButtonCard Icon={Hero} label = 'SEARCH'/>
                    <ButtonCard Icon={Hero} label = 'ACHIEVEMENT'/>
                    <ButtonCard Icon={Hero} label = 'AWARD'/>
                    <ButtonCard Icon={Hero} label = 'EDUCATION'/>
                    <ButtonCard Icon={Hero} label = 'EXPERIENCE'/>

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
            width:100%;
            display:flex;
            flex-direction: column;
            align-items: center;
            .tags{
                display:flex;
                justify-content: space-around;
                gap: 2rem;
            }
        }
`
const ProfileSummary = styled.div`
    display: flex;
    flex-direction: row;
    color: #616060;
    .profileImage{
        width: 30%;
        display:flex;
        justify-content: center;
        flex-direction: column;
        align-items : end;
        padding-right: 3rem;
        margin-right: 2rem;
    }
    .details{
        width: 40%;
    }
    .name{
        color: black;
        font-weight: 800;
    }


`

const Socials = styled.div`
    display: flex;
    justify-content: center;
    gap: 3rem;
    margin: 2.5rem 0;
`
const Stats = styled.div`
    display: flex;
    margin: 0 1.2rem;
    gap: 1.3rem;
`;
const Location = styled.div`
`;
const PhotosContainer = styled.div`
    width: 100%;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
`;

export default Profile;

