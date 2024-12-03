import { useRef } from 'react';
import { Form } from 'react-router-dom';
import { MapPin } from './Icons';

export default function Header({ currentWeather, city, forecast }) {
  const inputRef = useRef(null);

  const imgSrc = currentWeather.condition.icon;
  const imgAlt = currentWeather.condition.text;

  const todaysForecast = forecast[0].day;

  const currentTemp = Math.round(currentWeather.temp_c) + 'º';
  const maxTemp = Math.round(todaysForecast.maxtemp_c);
  const minTemp = Math.round(todaysForecast.mintemp_c);
  const feelsLike = Math.round(currentWeather.feelslike_c);

  const temp = `${maxTemp}º / ${minTemp}º Feels like ${feelsLike}º`;

  return (
    <header className='mx-auto max-w-[46rem] px-1 pt-2'>
      <Form className='mb-3' action='/search' role='search'>
        <input
          type='search'
          name='q'
          aria-label='Search weather for a city'
          placeholder='Search for a city, eg. London'
          className='h-10 w-full rounded-2xl bg-[--bg-sections] indent-3 placeholder:text-[--input-placeholder] focus:outline-none focus:ring-1 focus:ring-black/80'
          ref={inputRef}
        />
      </Form>

      <div className='grid grid-cols-[1fr_auto] items-center'>
        <div>
          <h2 className='text-6xl font-bold sm:text-7xl'>{currentTemp}</h2>

          <h3 className='mt-2 text-2xl font-medium sm:text-3xl'>
            {city}
            <span className='ml-0.5'>
              <MapPin />
            </span>
          </h3>

          <p className='mt-2 text-lg font-medium sm:text-xl'>{temp}</p>
        </div>

        <img
          src={imgSrc}
          alt={imgAlt}
          width={64}
          height={64}
          className='h-28 w-28 sm:h-44 sm:w-44'
        />
      </div>
    </header>
  );
}
