import axios from 'axios';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import HourlyForecast from './components/HourlyForcast';

function App() {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const apiURL = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=Rosario&days=7&aqi=no&alerts=no`;
  const [currentWeather, setCurrentWeather] = useState([]);
  const [location, setLocation] = useState([]);
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(apiURL);

      setCurrentWeather(response.data.current);
      setLocation(response.data.location);
      setForecast(response.data.forecast.forecastday);
    };

    getData();
  }, []);

  return (
    <div className='bg-violet'>
      <Header
        currentWeather={currentWeather}
        location={location}
        forecast={forecast[0]}
      />

      <HourlyForecast forecast={forecast} />
    </div>
  );
}

export default App;
