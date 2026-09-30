import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchWeather } from '../services/api';

export function useWeather() {
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);
  const [coords, setCoords] = useState('');
  const prevCoords = localStorage.getItem('coords');
  const defaultCoords = '-32.945805, -60.653698';

  // get url params for searching by city
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get('q');

  if (query) {
    useEffect(() => {
      setLoading(true);
      fetchWeather(query).then((data) => {
        setWeather(data);
        setLoading(false);
      });
    }, [query]);

    return { weather, loading };
  }

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

          if (!prevCoords || prevCoords !== coordsString) {
            setCoords(coordsString);
            fetchWeather(coordsString).then((data) => {
              setWeather(data);
              setLoading(false);
            });
          }

          if (prevCoords === coordsString) {
            setCoords(prevCoords);
            fetchWeather(prevCoords).then((data) => {
              setWeather(data);
              setLoading(false);
            });
          }
        },
        (e) => {
          console.error('Could not get your location', e);

          // default location
          fetchWeather(defaultCoords).then((data) => {
            setWeather(data);
            setLoading(false);
          });

          localStorage.setItem('coords', defaultCoords);
        }
      );
    } else {
      // default location
      fetchWeather(defaultCoords).then((data) => {
        setWeather(data);
        setLoading(false);
      });

      localStorage.setItem('coords', defaultCoords);
    }
  }, [coords, loading]);

  return { weather, loading };
}
