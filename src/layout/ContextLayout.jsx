import { Outlet } from 'react-router-dom';
import { WeatherProvider } from '../context/weatherContext';

export default function ContextLayout() {
  return (
    <WeatherProvider>
      <Outlet />
    </WeatherProvider>
  );
}
