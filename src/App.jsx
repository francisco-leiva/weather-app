import { useEffect, useContext } from 'react';
import { useData } from './hooks/useData';
import Loading from './components/Loading';
import Header from './components/Header';
import HourlyForecast from './components/HourlyForecast';
import DailyForecast from './components/DailyForecast';
import SunriseAndSunset from './components/SunriseAndSunset';
import OtherMeteorologicalData from './components/OtherMeteorologicalData';
import Footer from './components/Footer';
import { ThemeContext } from './context/ThemeContext';

export default function App() {
  const { appClassName, dayCondition } = useContext(ThemeContext);
  const { useWeather, conditionCode, isDay } = useData();
  const { currentWeather, location, forecast } = useWeather;

  useEffect(() => {
    dayCondition(conditionCode, isDay);
  }, [conditionCode, isDay]);

  return useWeather.length === 0 ? (
    <Loading />
  ) : (
    <main
      className={`font-poppins sm:flex sm:flex-col sm:items-center ${appClassName}`}
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
