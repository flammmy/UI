import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #f0f0f0;
  box-shadow : 5px 5px 8px 2px #f0f0f0;
  color : #999292;
  border-radius: 2rem;
  display: grid;
  grid-template-columns: 20% 80%;
  font-weight: 600;
  font-size : .6rem;
  gap: .6rem;
      transition:.3s;
    &:hover{
        transform:scale(1.04);

    }
  padding : 0 .2rem;
  img{
    height : 2rem;
    width : 2.3rem;
  }
  .labelContainer{
    text-align : center;
    margin : auto;
  }
  @media (max-width: 768px) {
    font-size : .5rem;

  }
`;

const ButtonCard = ({ Icon,label }) => {
  return <Card>
    <div className='imgContainer'>
      <img src={Icon}/>
    </div>
    <div className='labelContainer'>
      {label}
    </div>
  </Card>;
};

export default ButtonCard;
