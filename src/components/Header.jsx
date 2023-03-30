import axios from 'axios';
import { useState, useEffect } from 'react';

const Header = () => {
  const [currentWeather, setCurrentWeather] = useState([]);
  const [location, setLocation] = useState([]);
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        'http://api.weatherapi.com/v1/forecast.json?key=294a7374210646ddac2205214232903&q=Rosario&days=7'
      );

      setCurrentWeather(response.data.current);
      setLocation(response.data.location);
      setForecast(response.data.forecast.forecastday);
    };

    getData();
  }, []);

  return (
    <header className='flex items-center justify-around bg-violet'>
      <div>
        <h2 className='text-5xl'>{currentWeather && currentWeather.temp_c}º</h2>
        <span className='text-2xl'>{location && location.name}</span>

        <p>
          {forecast &&
            `${Math.round(forecast[0].day.maxtemp_c)}º / ${Math.round(
              forecast[0].day.mintemp_c
            )}`}
          {currentWeather &&
            ` Feels like ${Math.round(currentWeather.feelslike_c)}º`}
        </p>
      </div>

      <picture>
        <img
          src={currentWeather.condition.icon}
          alt={currentWeather.condition.text}
          width='86rem'
          height='86rem'
        />
      </picture>
    </header>
  );
};

export default Header;
