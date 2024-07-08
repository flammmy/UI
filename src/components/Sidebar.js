import React, { useState } from 'react';
import styled from 'styled-components';
import SidebarItem from './SidebarItem.js';
import Home from '../icons/Home.svg';
import Messages from '../icons/Message.svg';
import Notifications from '../icons/Notifications.svg';
import Options from '../icons/Options.svg';
import Plus from '../icons/Plus.svg';
import Search from '../icons/Search.svg';
import Logo from '../icons/logo.webp';
import Profile from '../icons/Profile.webp';

const SidebarContainer = styled.div`
  width: 230px;
  height: 100vh;
  background-color: #fff;
  box-shadow: 2px 0 0px 0px rgb(0 0 0 / 21%);
  display: flex;
  flex-direction: column;
  font-size: .8rem;  
  padding-top: 2.5rem;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 768px) {
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
    position: fixed;
    z-index: 10;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const LogoContainer = styled.div`
  margin-bottom: 2.5rem;
`;

const LogoImage = styled.img`
  width: 10rem; // Adjust the size as needed
  height: auto;
`;

const ToggleButton = styled.button`
  position: fixed;
  top: 15px;
  left: 15px;
  background-color: #fff;
  border: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 0.5rem;
  border-radius: 50%;
  cursor: pointer;
  z-index: 11;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ToggleButton onClick={toggleSidebar}>
        ☰
      </ToggleButton>
      <SidebarContainer isOpen={isOpen}>
        <LogoContainer>
          <LogoImage src={Logo} alt="Company Logo" />
        </LogoContainer>
        <SidebarItem icon={Home} label="Home" to="/feed" />
        <SidebarItem icon={Search} label="Search" to="/search" />
        <SidebarItem icon={Plus} label="Plus" to="/plus" />
        <SidebarItem icon={Messages} label="Messages" to="/messages" />
        <SidebarItem icon={Notifications} label="Notifications" to="/notifications" />
        <SidebarItem icon={Profile} label="Profile" to="/profile" isProfile={true} repo='repo' repocnt='999k'/>
        <SidebarItem icon={Options} label="Settings" to="/setting" />
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
