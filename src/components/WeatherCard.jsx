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
  font-size: 48px;
  font-weight: bold;
  text-align: center;
  padding: 20px
`

const WeatherCard = ({ cityName, temperature, weather }) => {
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
        </StyledTemperatureContainer>
      </StyledCard>
  )
}

export default WeatherCard;