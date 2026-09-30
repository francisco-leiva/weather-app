import { createContext } from 'react';
import { useWeather } from '../hooks/useWeather';
import { setWeatherTheme } from '../functions/setWeatherTheme';

export const WeatherContext = createContext();

export function WeatherProvider({ children }) {
  const { weather, loading } = useWeather();
  const currentWeather = weather?.currentWeather;
  const city = weather?.city;
  const forecast = weather?.forecast;
  const theme = setWeatherTheme(weather?.conditionCode, weather?.isDay);

  return (
    <WeatherContext.Provider
      value={{ loading, currentWeather, city, forecast, theme }}
    >
      {children}
    </WeatherContext.Provider>
  );
}
