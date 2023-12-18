import { useState, useEffect } from 'react';
import { fetchWeather } from '../services/api';
import { useLocation } from './useLocation';

export function useWeather() {
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    getWeather();

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [location]);

  const getWeather = async () => {
    if (location) {
      setLoading(true);
      const data = await fetchWeather(location);
      setWeather(data);
    }
  };

  return { weather, loading };
}
