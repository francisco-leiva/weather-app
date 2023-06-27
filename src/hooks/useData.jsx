import { useState, useEffect } from 'react';
import { fetchData } from '../api/api';

export function useData() {
  const defaultLocation = 'Rosario';
  const [weather, setWeather] = useState([]);
  const [conditionCode, setConditionCode] = useState('');
  const [isDay, setIsDay] = useState('');

  useEffect(() => {
    setDefaultLocation();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (location) => {
          const { latitude, longitude } = location.coords;
          const queryParameter = latitude + ',' + longitude;

          const { data, conditionCode, isDay } = await fetchData(
            queryParameter
          );
          setWeather(data);
          setConditionCode(conditionCode);
          setIsDay(isDay);
        },
        (e) => {
          throw new Error('You must accept the permissions. Reload the page.');
        }
      );
    }
  }, []);

  const setDefaultLocation = async () => {
    const { data, conditionCode, isDay } = await fetchData(defaultLocation);
    setWeather(data);
    setConditionCode(conditionCode);
    setIsDay(isDay);
  };

  return { weather, conditionCode, isDay };
}
