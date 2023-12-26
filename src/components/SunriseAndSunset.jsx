import sunriseImg from '../assets/sunrise.png';
import sunsetImg from '../assets/sunset.png';

export default function SunriseAndSunset({ forecast }) {
  const {
    date,
    astro: { sunrise, sunset },
  } = forecast[0];
  // sunrise = "07:17 AM"
  const sunriseTime = sunrise.split(' ')[0];

  // date = "2023-12-20"
  // sunset = "06:54 PM"
  // transform it into 24 hour format
  const sunsetTime = new Date([date, sunset]).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  });

  return (
    <section className='mx-auto my-4 grid max-w-[46rem] grid-cols-[1fr_1fr] justify-items-center rounded-2xl bg-[--bg-sections] p-4'>
      <div className='flex flex-col items-center'>
        <h4 className='text-xl font-medium sm:text-2xl'>Sunrise</h4>

        <span className='text-xl sm:text-2xl'>{sunriseTime}</span>

        <img
          src={sunriseImg}
          alt='Sunrise'
          width={500}
          height={500}
          loading='lazy'
          className='h-32 w-32 sm:h-60 sm:w-60'
        />
      </div>

      <div className='flex flex-col items-center'>
        <h4 className='text-xl font-medium sm:text-2xl'>Sunset</h4>

        <span className='text-xl sm:text-2xl'>{sunsetTime}</span>

        <img
          src={sunsetImg}
          alt='Sunset'
          width={500}
          height={500}
          loading='lazy'
          className='h-32 w-32 sm:h-60 sm:w-60'
        />
      </div>
    </section>
  );
}
