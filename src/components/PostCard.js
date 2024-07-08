import React from 'react';
import styled from 'styled-components';
import { SlOptionsVertical } from "C:/ooumph/social-media/node_modules/react-icons/sl";
import Post from '../icons/Post.webp'
import { FaPlus } from "react-icons/fa";

const Card = styled.div`
  background-color: #f0f0f0;
  width: 35rem;
  border-radius: 1rem;
  box-shadow: 7px 7px 11px 0px rgb(0 0 0 / 23%);
  margin-bottom: 20px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  .details {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
  }
  font-size: 1.3rem;
`;

const ProfilePictureWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  &::before {
    content: '(';
    position: absolute;
    left: 1.5rem;
    font-size: 1.2rem;
    color: gray;
  }

  &::after {
 content: '(';
    position: absolute;
    left: .9rem;
    font-size: 1.5rem;
    color: gray;
  }

  & .right-before {
    content: ')';
    position: absolute;
    right: 0px;
    font-size: 1.2rem;
    color: gray;
  }

  & .right-after {
    content: ')';
    position: absolute;
    right: -.5rem;
    font-size: 1.5rem;
    color: gray;
  }
  .rating{
    position: relative;
    top: -2.1rem;
    left: 3rem;
    font-size: .9rem;
    color: #5e5b5b;
    font-weight: bold;
  }
`;

const ProfilePicture = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  padding: 1rem;
`;

const Name = styled.div`
  font-weight: bold;
`;

const Time = styled.div`
  color: gray;
  font-size: 12px;
`;

const Options = styled(SlOptionsVertical)`
  cursor: pointer;
  height: 1rem;
`;

const Caption = styled.div`
  padding: 0 2rem;
`;

const Image = styled.img`
  width: 35rem;
  height: 30rem;
  margin-top: 1.3rem;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
`;
const IconContainer = styled.div`
    height: 1.5rem;
    width: 1.5rem;
    background: #dedcdc;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: .6rem;
    box-shadow: 1px 2px 5px #00000073;

    &:hover{
        transform:scale(1.04);
    }
`;
const PostCard = ({ profilePicture, userName, time, caption, postImage }) => {
  return (
    <Card>
      <Header>
        <User>
          <ProfilePictureWrapper>
          <div className='rating'>3.2</div>

            <ProfilePicture src={profilePicture} alt="Profile" />
            <div className="right-before">)</div>
            <div className="right-after">)</div>
          </ProfilePictureWrapper>
          <div className="details">
            <Name>{userName}</Name>
            <Time>{time}</Time>
          </div>
        </User>
        <IconContainer>
                    <FaPlus />
                </IconContainer>
        <Options size={20} />
      </Header>
      <Caption>{caption}</Caption>
      <Image src={Post || postImage} alt="Post" />
    </Card>
  );
};

export default PostCard;
