import axios from "axios";
import { useEffect, useState } from "react";
import Home from './pages/Home';

import "./App.css";

const key = "4a5cddb39f8559c3da0ee96d61420547";

const App = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [weather, setWeather] = useState("");
  const [weatherDescription, setWeatherDescription] = useState("")
  const [icon, setIcon] = useState("")
  const [temperature, setTemperature] = useState(0);
  const [cityName, setCityName] = useState("");
  const [inputValue, setInputValue] = useState("")

  const savePositionToState = (position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  };

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        await navigator.geolocation && window.navigator.geolocation.getCurrentPosition(
          savePositionToState
        );
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`
        );
        setTemperature(res.data.main.temp);
        setCityName(res.data.name);
        setWeather(res.data.weather[0].main);
        setWeatherDescription(res.data.weather[0].description);
        setIcon(res.data.weather[0].icon);
        console.log(res.data);
      } catch (err) {
        console.error('error', err);
      }
    };
    fetchWeather();
  }, [latitude, longitude]);

  return (
    <div className="app">
      <Home
        setTemperature={setTemperature}
        cityName={cityName}
        temperature={temperature}
        weather={weather}
        setWeather={setWeather}
        weatherDescription={weatherDescription}
        setWeatherDescription={setWeatherDescription}
        icon={icon}
        setIcon={setIcon}
        inputValue={inputValue}
        setInputValue={setInputValue}
        setCityName={setCityName}
      />
    </div>
  );
}

export default App;