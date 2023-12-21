export default function Footer() {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const fullDate = month + '/' + day;
  const time = `${hours < 10 ? '0' + hours : hours}:${minutes}`;

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
