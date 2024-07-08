import React from 'react';
import styled from 'styled-components';
import ButtonCard from '../components/ButtonCard';
import Story from '../components/Story';
import PostCard from '../components/PostCard';
import Profile from '../icons/Profile.webp';
import Suggestion from '../components/Suggestion';
import { useNavigate } from 'react-router-dom';
import Ironman from '../icons/ironman.jpeg';

const Container = styled.div`
   display: grid;
   grid-template-columns: 70% 30%;
   gap: 20px;
   height: 100vh; 
   padding: 20px; 
   
`
const SuggestedContainer = styled.div`
   display : flex;
   flex-direction : column;
   gap : 20px;
   .peopleSug{
      border : 2px solid #0000000f;
      border-radius : .5rem;
      font-size: .9rem;
      padding: 1rem .1rem;

   }
   .comSug{
      border : 2px solid #0000000f;
      border-radius : .5rem;
      font-size: .9rem;
      padding: 1rem .1rem;
   }
   .p{
      color : #0000000f;
   }
`
const FeedContainer = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ButtonSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 2rem;
`;

const StoriesSection = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: auto;
  padding-bottom: 10px;
  justify-content: center;
`;

const FeedSection = styled.div`
  display: flex;
  gap: 20px;
  justify-content : center;

`;



const Feed = () => {
   const navigate = useNavigate();

   const handleClick = () => {
     navigate('/communityprofile');
   };
   const storiesData = [
      { isMyStory: true, name: 'My Story', vibes: '3.2', icon: 'Profile' },
      { isMyStory: false, name: 'Alice', vibes: '3.2', icon: 'Profile' },
      { isMyStory: false, name: 'Bob', vibes: '3.2', icon: 'Profile' },
      { isMyStory: false, name: 'Charlie', vibes: '3.2', icon: 'Profile' },
      { isMyStory: false, name: 'Charlie', vibes: '3.2', icon: 'Profile' },
      { isMyStory: false, name: 'Charlie', vibes: '3.2', icon: 'Profile' },
      { isMyStory: false, name: 'Charlie', vibes: '3.2', icon: 'Profile' },

   ];
   const suggestions = [
      {
         profileImg: 'profile1.jpg',
         vibeRating: '4.2',
         name: 'Alice',
         followedBy: 'John',
      },
      {
         profileImg: 'profile2.jpg',
         vibeRating: '3.6',
         name: 'Bob',
         followedBy: 'Jane',
      },
      {
         profileImg: 'profile3.jpg',
         vibeRating: '4.0',
         name: 'Charlie',
         followedBy: 'David',
      },
      {
         profileImg: 'profile4.jpg',
         vibeRating: '3.2',
         name: 'Diana',
         followedBy: 'Emily',
      },
   ];
   const communitySuggestions = [
      {
         profileImg: 'profile1.jpg',
         vibeRating: '4.2',
         name: 'IronMan Fanpage',
         followedBy: '21k',
      },
      {
         profileImg: 'profile2.jpg',
         vibeRating: '3.6',
         name: 'Bob',
         followedBy: '12k',
      },
      {
         profileImg: 'profile3.jpg',
         vibeRating: '4.0',
         name: 'Charlie',
         followedBy: '15k',
      },
      {
         profileImg: 'profile4.jpg',
         vibeRating: '3.2',
         name: 'Diana',
         followedBy: '18k',
      },
   ];
   return (
      <Container>
         <FeedContainer>
            <ButtonSection>
               <ButtonCard Icon={Profile} label='Inner Circle'></ButtonCard>
               <ButtonCard Icon={Profile} label='Inner Circle'></ButtonCard>
               <ButtonCard Icon={Profile} label='Inner Circle'></ButtonCard>

            </ButtonSection>

            <StoriesSection>
               {storiesData.map((story, index) => (
                  <Story
                     key={index}
                     isMyStory={story.isMyStory}
                     name={story.name}
                     vibes={story.vibes}
                     icon={story.icon}
                     
                  />
               ))}
               {/* Add more stories as needed */}
            </StoriesSection>

            <FeedSection>
               <PostCard profilePicture={Profile} userName='ella22>>Porsche.21' time='12:02 pm' caption='Having a car made me realise that environment is precious and gas is costly!' postImage="https://via.placeholder.com/500" />
            </FeedSection>
         </FeedContainer>
         <SuggestedContainer>
            <p>Suggested for you</p>

               <div className='peopleSug'>
                  {suggestions.map((suggestion, index) => (
                     <Suggestion
                        key={index}
                        profileImg={Profile}
                        vibeRating={suggestion.vibeRating}
                        name={suggestion.name}
                        followedBy={suggestion.followedBy}
                        com = {false}
                        
                     />
                  ))}
               </div>
               <div className='comSug' onClick={handleClick}>
                  {communitySuggestions.map((suggestion, index) => (
                     <Suggestion
                        key={index}
                        profileImg={Ironman}
                        vibeRating={suggestion.vibeRating}
                        name={suggestion.name}
                        followedBy={suggestion.followedBy}
                        com = {true}
                     />
                  ))}
               </div>

         </SuggestedContainer>

      </Container>

   );
};

export default Feed;
