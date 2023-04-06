import axios from 'axios';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useState, useEffect, useContext } from 'react';
import Header from './components/Header';
import HourlyForecast from './components/HourlyForecast';
import DailyForecast from './components/DailyForecast';
import SunriseAndSunset from './components/SunriseAndSunset';
import OtherMeteorologicalData from './components/OtherMeteorologicalData';
import Footer from './components/Footer';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const [apiURL, setApiURL] = useState(
    'https://api.weatherapi.com/v1/forecast.json?key=27108248a8404184a5222207233103&q=Rosario&days=7&aqi=no&alerts=no'
  );
  const { appClassName, dayCondition } = useContext(ThemeContext);
  const [weather, setWeather] = useState([]);
  const { current, location, forecast } = weather;

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(apiURL);
      const data = await response.data;

      // returns a code for each type of weather
      const conditionCode = data?.current?.condition?.code;
      // returns 1 if it's day and 0 if it's night
      const isDay = data?.current?.is_day;

      setWeather(data);

      dayCondition(conditionCode, isDay);
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (location) => {
          const { coords } = location;
          const latitude = coords.latitude;
          const longitude = coords.longitude;
          const queryParameter = latitude + ',' + longitude;

          setApiURL(
            `https://api.weatherapi.com/v1/forecast.json?key=27108248a8404184a5222207233103&q=${queryParameter}&days=7&aqi=no&alerts=no`
          );
        },
        (err) => {
          console.log(err);
        }
      );

      getData();
    } else {
      getData();
    }
  }, [apiURL]);

  return weather.length === 0 ? (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
    >
      <CircularProgress color='inherit' />
    </Backdrop>
  ) : (
    <main className={appClassName}>
      <Header
        currentWeather={current}
        location={location}
        forecast={forecast}
      />

      <HourlyForecast forecast={forecast} />

      <DailyForecast forecast={forecast} />

      <SunriseAndSunset forecast={forecast} />

      <OtherMeteorologicalData currentWeather={current} />

      <Footer currentWeather={current} />
    </main>
  );
}

export default App;
