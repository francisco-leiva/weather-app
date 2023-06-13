import { useState, useEffect } from 'react';
import { fetchData } from '../api/api';

export function useData() {
  const [weather, setWeather] = useState([]);
  const [conditionCode, setConditionCode] = useState('');
  const [isDay, setIsDay] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (location) => {
        const { latitude, longitude } = location.coords;
        const queryParameter = latitude + ',' + longitude;

        const { data, conditionCode, isDay } = await fetchData(queryParameter);
        setWeather(data);
        setConditionCode(conditionCode);
        setIsDay(isDay);
      },
      (e) => {
        throw alert('You must accept the permissions. Reload the page.');
      }
    );
  }, []);

  return { weather, conditionCode, isDay };
}
