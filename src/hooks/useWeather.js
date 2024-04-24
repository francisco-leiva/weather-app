import { useState, useEffect } from 'react';
import { fetchWeather } from '../services/api';

export function useWeather() {
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);
  const [coords, setCoords] = useState('');
  const prevCoords = localStorage.getItem('coords');

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
          const coordsString = shortLatitude + ',' + shortLongitude;

          setCoords(coordsString);
        },
        (e) => {
          console.error('Could not get your location', e);
        }
      );
    }
  }, []);

  useEffect(() => {
    if (coords && coords === prevCoords) return;

    if (coords) {
      setLoading(true);
      fetchWeather(coords).then((data) => {
        setWeather(data);
        setLoading(false);
      });

      localStorage.setItem('coords', coords);
      return;
    }

    if (prevCoords) {
      setLoading(true);
      fetchWeather(prevCoords).then((data) => {
        setWeather(data);
        setLoading(false);
      });
      return;
    }

    // default location
    setLoading(true);
    fetchWeather('-32.945805, -60.653698').then((data) => {
      setWeather(data);
      setLoading(false);
    });

    localStorage.setItem('coords', '-32.945805, -60.653698');
  }, [coords]);

  return { weather, loading };
}
