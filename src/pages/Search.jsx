import { useContext } from 'react';
import { WeatherContext } from '../context/weatherContext';
import Loading from '../components/Loading';
import Header from '../components/Header';
import HourlyForecast from '../components/HourlyForecast';
import DailyForecast from '../components/DailyForecast';
import SunriseAndSunset from '../components/SunriseAndSunset';
import OtherMeteorologicalData from '../components/OtherMeteorologicalData';
import Footer from '../components/Footer';

export default function Search() {
  const { loading, currentWeather, city, forecast, theme } =
    useContext(WeatherContext);

  if (loading) return <Loading />;

  return (
    <main
      data-theme={theme}
      className='font-poppins bg-[--bg-main] px-2 text-[--text-color] md:px-0'
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
