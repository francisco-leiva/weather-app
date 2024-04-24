import { useState, useEffect } from 'react';
import { fetchWeather } from '../services/api';

export function useWeather() {
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);
  const [coords, setCoords] = useState(null);
  const prevCoords = localStorage.getItem('coords');

  useEffect(() => {
    // get user location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const coordsString = latitude + ',' + longitude;

          // setting coords
          setCoords(coordsString);
          // save location in localStorage
          localStorage.setItem('coords', coordsString);
        },
        (e) => {
          console.error('Could not get your location', e);
        }
      );
    }
  }, []);

  useEffect(() => {
    if (!coords && prevCoords) {
      setLoading(true);
      fetchWeather(prevCoords).then((data) => {
        setWeather(data);
        setLoading(false);
      });
      return;
    }

    if (coords && coords !== prevCoords) {
      setLoading(true);
      fetchWeather(coords).then((data) => {
        setWeather(data);
        setLoading(false);
      });
      return;
    }

    // default location
    if (!coords && !prevCoords) {
      setLoading(true);
      fetchWeather('Rosario').then((data) => {
        setWeather(data);
        setLoading(false);
      });
    }
  }, [coords]);

  return { weather, loading };
}
