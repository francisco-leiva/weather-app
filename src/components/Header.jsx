import { MapPin } from './Icons';

export default function Header({ currentWeather, city, forecast }) {
  const imgSrc = currentWeather.condition.icon;
  const imgAlt = currentWeather.condition.text;

  const todaysForecast = forecast[0].day;

  const currentTemp = Math.round(currentWeather.temp_c) + 'º';
  const maxTemp = Math.round(todaysForecast.maxtemp_c);
  const minTemp = Math.round(todaysForecast.mintemp_c);
  const feelsLike = Math.round(currentWeather.feelslike_c);

  const temp = `${maxTemp}º / ${minTemp}º Feels like ${feelsLike}º`;

  return (
    <header className='mx-auto flex h-44 max-w-[46rem] justify-around'>
      <div className='flex flex-col justify-end'>
        <h2 className='text-7xl font-medium'>{currentTemp}</h2>

        <span className='mt-2 flex items-center gap-0.5 text-3xl font-medium'>
          {city}
          <MapPin />
        </span>

        <p className='mt-2 text-lg font-medium sm:text-xl'>{temp}</p>
      </div>

      <picture className='flex items-center'>
        <img src={imgSrc} alt={imgAlt} width={92} height={92} />
      </picture>
    </header>
  );
}
