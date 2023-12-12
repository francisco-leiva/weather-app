import { useState, useEffect } from 'react';
import { fetchData } from '../api/api';

export function useData() {
  const [useWeather, setUseWeather] = useState({});

  useEffect(() => {
    setLastLocation();

    getLocation();
  }, []);

  const setLastLocation = async () => {
    // getting last location from localStorage or set default location
    const lastLocation = localStorage.getItem('coords') || 'Rosario';

    const data = await fetchData(lastLocation);

    setUseWeather(data);
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (location) => {
          const { latitude, longitude } = location.coords;
          const queryParameter = latitude + ',' + longitude;

          // save location in localStorage
          localStorage.setItem('coords', queryParameter);

          const data = await fetchData(queryParameter);

          setUseWeather(data);
        },
        (e) => {
          throw new Error('You must accept the permissions. Reload the page.');
        }
      );
    }
  };

  return useWeather;
}
