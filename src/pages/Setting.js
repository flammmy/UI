import React from 'react';
import styled from 'styled-components';
import SettingSidebar from '../components/SettingSidebar';
import EditProfile from '../components/EditProfile';
import SettingLayout from '../components/SettingLayout';

const SettingsContainer = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
`;

const ContentContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const Setting = () => {
  return (
    <SettingsContainer>
      <SettingSidebar/>
      <ContentContainer>
        <EditProfile />
      </ContentContainer>
    </SettingsContainer>
  );
};

export default Setting;
