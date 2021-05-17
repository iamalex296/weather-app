import styled from 'styled-components';

const StyledCard = styled.div`
  height: 500px;
  width: 400px;
  border-radius: 10px;
  box-shadow: 0 0 30px black;
`
const StyledHeader = styled.p`
  height: 100px;
  font-size: 24px;
  background-color: #343370;
  margin: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const StyledTemperatureContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  font-weight: bold;
  text-align: center;
  padding: 20px;
`
const StyledIcon = styled.img`
  height: 80px;
  width: 80px;
`

const WeatherCard = ({ cityName, temperature, weather, weatherDescription, icon }) => {
  return(
      <StyledCard>
        <StyledHeader>
          Current Location: {cityName.toUpperCase()}
        </StyledHeader>
        <StyledTemperatureContainer>
          {temperature}ºC
        </StyledTemperatureContainer>
        <StyledTemperatureContainer>
          {weather}
          <StyledIcon src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon" />
        </StyledTemperatureContainer>
        <StyledTemperatureContainer>
          {weatherDescription}
        </StyledTemperatureContainer>
      </StyledCard>
  )
}

export default WeatherCard;