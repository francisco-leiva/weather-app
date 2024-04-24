import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchWeather } from '../services/api';
import { useThemeContext } from '../hooks/useThemeContext';
import Loading from '../components/Loading';
import Header from '../components/Header';
import HourlyForecast from '../components/HourlyForecast';
import DailyForecast from '../components/DailyForecast';
import SunriseAndSunset from '../components/SunriseAndSunset';
import OtherMeteorologicalData from '../components/OtherMeteorologicalData';
import Footer from '../components/Footer';

export default function Search() {
  // get url params
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get('q');
  // setting up weather
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);
  const currentWeather = weather?.currentWeather;
  const city = weather?.city;
  const forecast = weather?.forecast;
  const conditionCode = weather?.conditionCode;
  const isDay = weather?.isDay;
  const theme = useThemeContext({ conditionCode, isDay });

  useEffect(() => {
    setLoading(true);
    fetchWeather(query).then((data) => {
      setWeather(data);
      setLoading(false);
    });
  }, [query]);

  return loading ? (
    <Loading />
  ) : (
    <main
      data-theme={theme}
      className='bg-[--bg-main] px-2 font-poppins text-[--text-color] md:px-0'
    >
      <Header currentWeather={currentWeather} city={city} forecast={forecast} />

      <HourlyForecast forecast={forecast} />

      <DailyForecast forecast={forecast} />

      <SunriseAndSunset forecast={forecast} />

      <OtherMeteorologicalData currentWeather={currentWeather} />

      <Footer />
    </main>
  );
}
