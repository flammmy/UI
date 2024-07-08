import React from 'react';
import styled from 'styled-components';

const SuggestionCard = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

const SuggestionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  flex-direction: row;
  gap: 10px;
  width: 100%;
  padding: 0rem 0.6rem;

  .details {
    display: flex;
    align-items: center;
  }
`;

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-bottom: 5px;
`;

const VibeRating = styled.div`
  font-size: 10px;
  color: gray;
`;

const InfoSection = styled.div`
  flex-grow: 1;
`;

const Name = styled.div`
  font-weight: bold;
`;

const FollowedBy = styled.div`
  font-size: 12px;
  font-weight: 600;
`;

const ButtonSection = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2rem;
`;

const VibeButton = styled.button`
  padding: 6px 12px;
  background: ${props => 
    props.com
      ? 'linear-gradient(90deg, rgb(63 175 65 / 83%) 5%, rgb(33 137 76) 72%, rgb(65 239 127) 100%)'
      : 'linear-gradient(90deg, rgb(63 162 175 / 83%) 5%, rgb(17 15 196 / 83%) 72%, rgba(0, 254, 255, 1) 100%)'};
  color: #fff;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  &:hover {
    background-color: ${props => 
      props.com ? '#0056b3' : '#a00'};
  }
`;

const Suggestion = ({ profileImg, vibeRating, name, followedBy, com }) => {
  return (
    <SuggestionCard>
      <SuggestionContainer>
        <div className="details">
          <ProfileSection>
            <VibeRating>{vibeRating}</VibeRating>
            <ProfileImage src={profileImg} alt="Profile" />
          </ProfileSection>

          <InfoSection>
            <Name>{name}</Name>
            {com ? (
              <FollowedBy>{followedBy} vibers</FollowedBy>
            ) : (
              <FollowedBy>Followed by {followedBy}</FollowedBy>
            )}
          </InfoSection>
        </div>

        <ButtonSection>
          <VibeButton com={com}>Let's Vibe</VibeButton>
        </ButtonSection>
      </SuggestionContainer>
    </SuggestionCard>
  );
};

export default Suggestion;
