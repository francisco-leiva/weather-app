const Footer = ({ currentWeather }) => {
  const { last_updated } = currentWeather;

  const date = new Date(last_updated);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const fullDate = day + '/' + month;

  const hour = last_updated.split(' ')[1];

  const lastUpdated = `${fullDate}, ${hour} Update`;

  return (
    <footer className='flex justify-between p-4 pt-0 font-dosis text-lg sm:w-[36rem] sm:text-xl'>
      <div>
        <a href='https://www.weatherapi.com/' title='Free Weather API'>
          WeatherAPI.com
        </a>
      </div>

      <div>
        <span>{lastUpdated}</span>
      </div>
    </footer>
  );
};

export default Footer;
