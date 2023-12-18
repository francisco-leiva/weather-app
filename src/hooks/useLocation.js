import { useState, useEffect } from 'react';

export function useLocation() {
  // last location or default location
  const [location, setLocation] = useState(
    localStorage.getItem('coords') || 'Rosario'
  );

  useEffect(() => {
    // current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const coords = latitude + ',' + longitude;

          if (coords === location) {
            return;
          }

          // save location in localStorage
          localStorage.setItem('coords', coords);
          setLocation(coords);
        },
        (e) => {
          throw new Error('Could not get your location', e);
        }
      );
    }
  }, [location]);

  return location;
}
