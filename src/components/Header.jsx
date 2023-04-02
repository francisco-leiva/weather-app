import { MapPin } from './Icons';

const Header = ({ currentWeather, location, forecast }) => {
  const { forecastday } = forecast;
  const todaysForecast = forecastday[0]?.day;

  return (
    <header className='flex h-40 justify-around bg-violet'>
      <div className='flex flex-col justify-end font-dosis text-white'>
        <h2 className='text-7xl'>{currentWeather?.temp_c}º</h2>

        <span className='mt-2 flex items-center gap-0.5 text-2xl'>
          {location?.name}
          <MapPin />
        </span>

        <p className='mt-2'>
          {`${Math.round(todaysForecast?.maxtemp_c)}º / ${Math.round(
            todaysForecast?.mintemp_c
          )}º`}

          {` Feels like ${Math.round(currentWeather?.feelslike_c)}º`}
        </p>
      </div>

      <picture className='flex items-center'>
        <img
          src={currentWeather?.condition?.icon}
          alt={currentWeather?.condition?.text}
          width={'86rem'}
          height={'86rem'}
        />
      </picture>
    </header>
  );
};

export default Header;
