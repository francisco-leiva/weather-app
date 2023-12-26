export default function Footer() {
  const date = new Date();

  const fullDate = date.toLocaleDateString('en-US', {
    day: '2-digit',
    month: '2-digit',
  });

  const time = date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: 'numeric',
    hour12: false,
  });

  const lastUpdated = `Updated ${fullDate}, ${time}`;

  return (
    <footer className='mx-auto mt-4 flex max-w-[46rem] justify-between pb-4 text-lg sm:text-xl'>
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
}
