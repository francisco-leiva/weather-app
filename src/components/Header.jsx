const Header = ({ currentWeather, location, forecast }) => {
  return (
    <header className='flex items-center justify-around bg-violet'>
      <div className='text-white'>
        <h2 className='text-5xl'>{currentWeather?.temp_c}º</h2>
        <span className='text-2xl'>{location?.name}</span>

        <p>
          {`${Math.round(forecast?.day?.maxtemp_c)}º / ${Math.round(
            forecast?.day?.mintemp_c
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
