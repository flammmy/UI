import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar.js';
import SettingSidebar from './SettingSidebar.js';

const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
`;

const ContentContainer = styled.div`
  flex-grow: 1;
  padding: 20px;
  overflow-y: auto;
`;

const SettingLayout = ({ children }) => {
  return (
    <LayoutContainer>
      <SettingSidebar />
      <ContentContainer>
        {children}
      </ContentContainer>

    </LayoutContainer>
  );
};

export default SettingLayout;
