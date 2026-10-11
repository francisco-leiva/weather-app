import { useEffect } from 'react';
import Loading from './components/Loading';
import Header from './components/Header';
import HourlyForecast from './components/HourlyForecast';
import DailyForecast from './components/DailyForecast';
import SunriseAndSunset from './components/SunriseAndSunset';
import OtherMeteorologicalData from './components/OtherMeteorologicalData';
import Footer from './components/Footer';
import { fetchWeather } from './services/api';
import { useWeatherStore } from './store/weatherStore';

export default function App() {
  const loading = useWeatherStore(s => s.loading)
  const theme = useWeatherStore(s => s.theme)

  const prevCoords = localStorage.getItem('coords');
  const defaultCoords = '-32.945805, -60.653698';

  useEffect(() => {
    // get user location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // regex to get 6 numbers after the comma
          const regExp = /^-?\d+(?:\.\d{0,6})?/;
          const shortLatitude = latitude.toString().match(regExp)[0];
          const shortLongitude = longitude.toString().match(regExp)[0];
          const actualCoords = shortLatitude + ',' + shortLongitude;

          if (!prevCoords || prevCoords !== actualCoords) {
            localStorage.setItem('coords', actualCoords);

            fetchWeather(actualCoords)
          }

          if (prevCoords === actualCoords) {
            fetchWeather(prevCoords);
          }
        },
        (e) => {
          console.error('Could not get your location', e);

          // default location
          fetchWeather(defaultCoords)

          localStorage.setItem('coords', defaultCoords);
        }
      );
    } else {
      // default location
      fetchWeather(defaultCoords)

      localStorage.setItem('coords', defaultCoords);
    }
  }, []);

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
