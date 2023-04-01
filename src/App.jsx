import axios from 'axios';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import HourlyForecast from './components/HourlyForcast';
import DailyForecast from './components/DailyForecast';

function App() {
  const apiURL = `https://api.weatherapi.com/v1/forecast.json?key=27108248a8404184a5222207233103&q=Rosario&days=7&aqi=no&alerts=no`;
  const [weather, setWeather] = useState([]);
  const { current, location, forecast } = weather;

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(apiURL);

      setWeather(response.data);
    };

    getData();
  }, []);

  return weather.length === 0 ? (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
    >
      <CircularProgress color='inherit' />
    </Backdrop>
  ) : (
    <div className='bg-violet'>
      <Header
        currentWeather={current}
        location={location}
        forecast={forecast}
      />

      <HourlyForecast forecast={forecast} />

      <DailyForecast forecast={forecast} />
    </div>
  );
}

export default App;
