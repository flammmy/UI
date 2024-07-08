import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Item = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 15px 0;
  color: #333;
  text-decoration: none;
  justify-content: space-evenly;
  &:hover {
    background-color: #f0f0f0;
  }
  &.active {
    font-weight : bold;
  }
    .labelContainer{
      width : 50%;
      text-align : left;
      p{
        margin:0;
        color:#dada00;;
        font-weight:550;
      }
    }
    .imgContainer{
       width: 1.5rem;
       height: 1.5rem;
       border-radius : 50%;
    }
      img, svg {
        width: 100%;
        height: 100%;
      }
`;
const Num = styled.span`
  color:black;
  vertical-align:middle;
`


const SidebarItem = ({ icon: IconComponent, label, to,isProfile,repo,repocnt}) => (
  <Item to={to} activeClassName="active">
    <div className='imgContainer'>
      <img src={IconComponent}/>
    </div>
    <div className='labelContainer'>
    {label}
    {isProfile?
      <p>{repo} <Num>{repocnt}</Num></p>:''
    }
    </div>
  </Item>
);

export default SidebarItem;
