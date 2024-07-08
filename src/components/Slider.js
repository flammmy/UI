import React, { useState } from 'react';
import styled from 'styled-components';
import sliderThumbImage from '../icons/slider.png'; // Adjust the path if necessary

const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35rem;
  margin: 5px 0;
`;

const ValueDisplay = styled.div`
  font-size: 1rem;
  color: grey;
  margin: 1rem 0;
  font-weight: bold;
`;

const GradientSlider = styled.input`
  width: 100%;
  -webkit-appearance: none;
  height: 2.5px;
  border-radius: 10px;
  background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet);
  outline: none;
  opacity: 0.7;
  transition: opacity 0.2s;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: url(${sliderThumbImage}) center center no-repeat;
    background-size: 60px 60px; 
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: url(${sliderThumbImage}) center center no-repeat;
    background-size: 50px 50px; 
    cursor: pointer;
  }
`;

const Slider = () => {
  const [value, setValue] = useState(3.5);

  const handleSliderChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <SliderContainer>
      <ValueDisplay>{value}</ValueDisplay>
      <GradientSlider
        type="range"
        min="0"
        max="10"
        step="0.1"
        value={value}
        onChange={handleSliderChange}
      />
    </SliderContainer>
  );
};

export default Slider;
