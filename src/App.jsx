import { useEffect, useContext } from 'react';
import { useWeather } from './hooks/useWeather';
import Loading from './components/Loading';
import Header from './components/Header';
import HourlyForecast from './components/HourlyForecast';
import DailyForecast from './components/DailyForecast';
import SunriseAndSunset from './components/SunriseAndSunset';
import OtherMeteorologicalData from './components/OtherMeteorologicalData';
import Footer from './components/Footer';
import { ThemeContext } from './context/ThemeContext';

export default function App() {
  const { theme, dayCondition } = useContext(ThemeContext);
  const weather = useWeather();
  const { currentWeather, location, forecast, conditionCode, isDay } = weather;

  useEffect(() => {
    dayCondition(conditionCode, isDay);
  }, [conditionCode, isDay]);

  return Object.keys(weather).length === 0 ? (
    <Loading />
  ) : (
    <main
      data-theme={theme}
      className='bg-[--bg-main] font-poppins text-[--text-color] sm:flex sm:flex-col sm:items-center'
    >
      <Header
        currentWeather={currentWeather}
        location={location}
        forecast={forecast}
      />

      <HourlyForecast forecast={forecast} />

      <DailyForecast forecast={forecast} />

      <SunriseAndSunset forecast={forecast} />

      <OtherMeteorologicalData currentWeather={currentWeather} />

      <Footer currentWeather={currentWeather} />
    </main>
  );
}
