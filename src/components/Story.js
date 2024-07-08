import React from 'react';
import styled, { css } from 'styled-components';
import { FaPlus } from 'react-icons/fa';
import Profile from '../icons/Profile.webp';

const Circle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-image: linear-gradient(white, white), radial-gradient(circle at top left, #f00, #3020ff);
  background-origin: border-box;
  background-clip: content-box, border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0 10px;

  ${(props) =>
    !props.isMyStory &&
    css`
      border: 4px solid;
      border-image-slice: 1;
      border-image-source: linear-gradient(45deg, #f09, #3023ae);
    `}
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Name = styled.div`
  margin-top: 5px;
  font-size: 12px;
  text-align: center;
`;

const Vibe = styled.div`
  margin-top: 5px;
  font-size: 12px;
  text-align: center;
`;

const PlusIcon = styled(FaPlus)`
  position: absolute;
  bottom: -2px;
  right: -2px;
  background-color: white;
  border-radius: 50%;
  padding: 2px;
`;

const Story = ({ isMyStory, name, vibes, Icon }) => {
  return (
    <div>
      <Vibe>{vibes}</Vibe>
      <Circle isMyStory={isMyStory}>
        {isMyStory && <PlusIcon size={14} />}
        <IconContainer>
          <img src={Profile} alt="Story Icon" height={60} />
        </IconContainer>
      </Circle>
      <Name>{name}</Name>
    </div>
  );
};

export default Story;
