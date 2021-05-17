import WeatherCard from '../components/WeatherCard'

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
const StyledInput = styled.input`
  border: none;
  outline: none;
  background-color: lightgray;
  color: gray;
  height: 24px;
  width: 200px;
  padding: 5px;
  margin-bottom: 20px;
`
const Home = ({ cityName, temperature, weather, weatherDescription, icon }) => {
  return(
    <StyledContainer>
      <StyledInput placeholder="Select City..." />
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