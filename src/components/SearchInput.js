import axios from 'axios';
import styled from 'styled-components';

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
const api = {
  key: "4a5cddb39f8559c3da0ee96d61420547",
  base: "https://api.openweathermap.org/data/2.5/"
};

const SearchInput = ({
  setTemperature,
  setCityName,
  setWeather,
  setWeatherDescription,
  setIcon,
  inputValue,
  setInputValue,
  placeholder,
}) => {
  const search = async (event) => {
    if (event.key === "Enter") {
      try {
        const result = await axios.get(`${api.base}weather?q=${inputValue}&units=metric&APPID=${api.key}`)
          setTemperature(result.data.main.temp);
          setCityName(result.data.name)
          setWeather(result.data.weather[0].main);
          setWeatherDescription(result.data.weather[0].description)
          setIcon(result.data.weather[0].icon)
          setInputValue('');
      } catch(err) {
        console.log('err',err)
      }
    }
  }

  return(
    <StyledInput
      placeholder={placeholder}
      onKeyDown={(event) => search(event)}
      value={inputValue}
      onChange={(event) => setInputValue(event.target.value)}
  />
  )
}

export default SearchInput;