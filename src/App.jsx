import axios from 'axios';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useState, useEffect, useContext } from 'react';
import Header from './components/Header';
import HourlyForecast from './components/HourlyForecast';
import DailyForecast from './components/DailyForecast';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const apiURL =
    'https://api.weatherapi.com/v1/forecast.json?key=27108248a8404184a5222207233103&q=Rosario&days=7&aqi=no&alerts=no';
  const { appClassName, dayCondition } = useContext(ThemeContext);
  const [weather, setWeather] = useState([]);
  const { current, location, forecast } = weather;

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(apiURL);
      const data = await response.data;

      setWeather(data);

      // parameter 1 returns a code for each type of weather, parameter 2 returns 1 if it's day and 0 if it's night
      dayCondition(data?.current?.condition?.code, data?.current?.is_day);
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
    <div className={appClassName}>
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
