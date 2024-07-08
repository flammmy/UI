import React from 'react';
import styled from 'styled-components';
import Photo1 from '../icons/photo1.jpg'; // adjust the path accordingly
import Photo2 from '../icons/photo2.jpg';
import Photo3 from '../icons/photo3.jpg';

const photos = [
  { id: 1, src: Photo1, alt: 'Photo 1' },
  { id: 2, src: Photo2, alt: 'Photo 2' },
  { id: 3, src: Photo3, alt: 'Photo 3' }
];

const PhotoGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  @media (max-width: 768px){
  grid-template-columns: repeat(2, 1fr);

  }
`;

const PhotoCard = styled.div`
  border-radius: 7px;
  overflow: hidden;
  img {
    width: 260px;
    height: 280px;
    aspect-ratio: 1 / 1;
    // object-fit: cover; 
    display: block;
  }
`;

const PhotoGrid = () => {
  return (
    <PhotoGridContainer>
      {photos.map(photo => (
        <PhotoCard key={photo.id}>
          <img src={photo.src} alt={photo.alt} />
        </PhotoCard>
      ))}
    </PhotoGridContainer>
  );
};

export default PhotoGrid;
