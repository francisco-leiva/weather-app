import { useState, useEffect } from 'react';
import { fetchWeather } from '../services/api';
import { getLocation } from '../utils/getLocation';

export function useWeather() {
  const [weather, setWeather] = useState({});
  // getting last location from localStorage or set default location
  const lastLocation = localStorage.getItem('coords') || 'Rosario';
  // get current location
  const currLocation = getLocation();

  useEffect(() => {
    getWeather();
  }, [currLocation]);

  const getWeather = async () => {
    if (currLocation) {
      const data = await fetchWeather(currLocation);
      setWeather(data);
    } else {
      const data = await fetchWeather(lastLocation);
      setWeather(data);
    }
  };

  return weather;
}
