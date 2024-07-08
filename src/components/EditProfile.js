import React from 'react';
import styled from 'styled-components';
import Profile from '../icons/Profile.webp'

const EditProfileContainer = styled.div`
  padding: 20px;
  flex-grow: 1;
  width: 60%;
  position: relative;
  height: 80vh;
  display:flex;
  flex-direction: column;
  justify-content: center;

`;

const Title = styled.h3`
  margin-bottom: 2rem;
`;

const ProfilePicture = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  .name {
    font-size: .8rem;
    font-weight: 700;
  }
`;

const ProfileImage = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  margin-right: 10px;
`;

const ChangeProfilePicture = styled.a`
  color: #007bff;
  text-decoration: none;
  cursor: pointer;
  font-size: .7rem;
  font-weight: 700;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  position: relative; /* Ensure form is positioned relative for absolute positioning of button */
`;

const FormRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-weight: bold;
`;

const Label = styled.label`
  font-weight: bold;
  flex: 0 0 150px;
  margin-right: 10px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Bio = styled.textarea`
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  resize: none;
`;

const SubmitButton = styled.button`
  position: absolute; 
  bottom: 20px; 
  right: 0;
  padding: 6px 15px;
  width: 6rem;
  background-color: #ebe7e7;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  color: #8d8888;
  box-shadow: 5px 4px 11px 3px #ccc7c7;
  &:hover {
    background-color: #d7d2d;
  }
`;

const EditProfile = () => {
  return (
    <EditProfileContainer>
      <Title>Edit Profile</Title>
      <ProfilePicture>
        <ProfileImage src={Profile} alt="Profile" />
        <div>
          <div className='name'>preeti_maurya002</div>
          <ChangeProfilePicture>Change profile picture</ChangeProfilePicture>
        </div>
      </ProfilePicture>
      <Form>
        <FormRow>
          <Label>Bio</Label>
          <Bio rows="1" placeholder="Happy go lucky"></Bio>
        </FormRow>
        <FormRow>
          <Label>Gender</Label>
          <Input type="text" value="Female" readOnly />
        </FormRow>
        <FormRow>
          <Label>Occupation</Label>
          <Input type="text" value="Student" readOnly />
        </FormRow>
        
      </Form>
      <SubmitButton type="submit">Submit</SubmitButton>
    </EditProfileContainer>
  );
};

export default EditProfile;
