import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const SidebarContainer = styled.div`
  width: 250px;
  padding: 20px;
  margin-right: 4rem;
  margin-top: 5rem;
`;

const SidebarItem = styled(NavLink)`
  display: block;
  padding: 10px 0;
  margin: 10px 0;
  color: #333;
  padding-left: 1rem;
  border-radius: .3rem;
  text-decoration: none;
  font-size: .8rem;
  font-weight: 500;
  &.active {
    background: #ebe7e7;
  }
  &:hover {
    color: #000;
  }
`;

const SettingSidebar = () => {
    return (
        <SidebarContainer>
            <h3>Settings</h3>
            <SidebarItem to="/setting">Edit Profile</SidebarItem>
            <SidebarItem to="/setting/professional-account">Professional Account</SidebarItem>
            <SidebarItem to="/setting/language-preferences">Language Preferences</SidebarItem>
            <SidebarItem to="/setting/email-notifications">Email Notifications</SidebarItem>
            <SidebarItem to="/setting/push-notifications">Push Notifications</SidebarItem>
            <SidebarItem to="/setting/password-and-security">Password and Security</SidebarItem>
        </SidebarContainer>
    );
};

export default SettingSidebar;
