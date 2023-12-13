import { useState } from 'react';

export function getLocation() {
  const [location, setLocation] = useState('');

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const coords = latitude + ',' + longitude;

        // save location in localStorage
        localStorage.setItem('coords', coords);
        setLocation(coords);
      },
      (e) => {
        throw new Error('Could not get your location', e);
      }
    );
  }

  return location;
}
