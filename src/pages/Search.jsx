import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useWeatherStore } from '../store/weatherStore';
import { fetchWeather } from '../services/api';
import Loading from '../components/Loading';
import Header from '../components/Header';
import HourlyForecast from '../components/HourlyForecast';
import DailyForecast from '../components/DailyForecast';
import SunriseAndSunset from '../components/SunriseAndSunset';
import OtherMeteorologicalData from '../components/OtherMeteorologicalData';
import Footer from '../components/Footer';

export default function Search() {
  // get url params for searching by city
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get('q');

  const loading = useWeatherStore(s => s.loading)
  const theme = useWeatherStore(s => s.theme)

  useEffect(() => {
    fetchWeather(query);
  }, [query]);

  if (loading) return <Loading />;

  return (
    <main
      data-theme={theme}
      className='font-poppins bg-[--bg-main] px-2 text-[--text-color] md:px-0'
    >
      <Header />

      <HourlyForecast />

      <DailyForecast />

      <SunriseAndSunset />

      <OtherMeteorologicalData />

      <Footer />
    </main>
  );
}
