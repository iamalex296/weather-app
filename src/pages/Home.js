import React from 'react';
import WeatherCard from '../components/WeatherCard';
import SearchInput from '../components/SearchInput';

import styled from 'styled-components';

const StyledContainer = styled.div`
  flex-direction: column;
  display: flex;
  height: 100vh;
  color: white;
  width: 500px;
  background-color: #423E81;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 5px black;
`

const Home = ({ 
  cityName,
  temperature, 
  setTemperature, 
  weather, 
  setWeather, 
  weatherDescription, 
  setWeatherDescription, 
  icon, 
  setIcon, 
  inputValue, 
  setInputValue, 
  setCityName, 
}) => {

  return(
    <StyledContainer>
      <SearchInput
        setTemperature={setTemperature}
        setCityName={setCityName}
        setWeatherDescription={setWeatherDescription}
        setWeather={setWeather}
        setIcon={setIcon}
        inputValue={inputValue}
        setInputValue={setInputValue}
        placeholder="Select City or Country..."
      />
      <WeatherCard
        cityName={cityName}
        temperature={temperature}
        weather={weather}
        weatherDescription={weatherDescription}
        icon={icon}
      />
    </StyledContainer>
  )
}

export default Home;