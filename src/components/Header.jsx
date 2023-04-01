import { MapPin } from './Icons';

const Header = ({ currentWeather, location, forecast }) => {
  const { forecastday } = forecast;
  const todaysForecast = forecastday[0]?.day;

  return (
    <header className='flex items-center justify-around bg-violet'>
      <div className='text-white'>
        <h2 className='text-5xl'>{currentWeather?.temp_c}º</h2>
        <span className='flex items-center gap-0.5 text-2xl'>
          <MapPin />
          {location?.name}
        </span>

        <p>
          {`${Math.round(todaysForecast?.maxtemp_c)}º / ${Math.round(
            todaysForecast?.mintemp_c
          )}º`}

          {` Feels like ${Math.round(currentWeather?.feelslike_c)}º`}
        </p>
      </div>

      <picture>
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
