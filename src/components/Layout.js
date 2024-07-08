import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar.js';

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

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Sidebar />
      <ContentContainer>
        {children}
      </ContentContainer>
    </LayoutContainer>
  );
};

export default Layout;
