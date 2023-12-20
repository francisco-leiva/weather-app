import { useWeather } from './hooks/useWeather';
import { useThemeContext } from './hooks/useThemeContext';
import Loading from './components/Loading';
import Header from './components/Header';
import HourlyForecast from './components/HourlyForecast';
import DailyForecast from './components/DailyForecast';
import SunriseAndSunset from './components/SunriseAndSunset';
import OtherMeteorologicalData from './components/OtherMeteorologicalData';
import Footer from './components/Footer';

export default function App() {
  const { weather, loading } = useWeather();
  const { currentWeather, city, forecast, conditionCode, isDay } = weather;
  const theme = useThemeContext({ conditionCode, isDay });

  return loading ? (
    <Loading />
  ) : (
    <main
      data-theme={theme}
      className='bg-[--bg-main] px-2 font-poppins text-[--text-color] sm:flex sm:flex-col sm:items-center'
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
