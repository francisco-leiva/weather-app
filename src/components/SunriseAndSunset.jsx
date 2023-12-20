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
  const sunsetDate = new Date([date, sunset]);

  // transform it into 24 hour format
  const sunsetTime = sunsetDate.getHours() + ':' + sunsetDate.getMinutes();

  return (
    <section className='mx-2 my-4 flex items-center gap-3 rounded-2xl bg-[--bg-sections] p-4 text-2xl sm:w-[36rem] md:w-[46rem]'>
      <div className='flex w-[50%] flex-col items-center'>
        <h4 className='font-medium'>Sunrise</h4>

        <span>{sunriseTime}</span>

        <picture>
          <img
            src={sunriseImg}
            alt='Sunrise'
            width={160}
            height={160}
            loading='lazy'
            className='sm:h-60 sm:w-60'
          />
        </picture>
      </div>

      <div className='flex w-[50%] flex-col items-center'>
        <h4 className='font-medium'>Sunset</h4>

        <span>{sunsetTime}</span>

        <picture>
          <img
            src={sunsetImg}
            alt='Sunset'
            width={160}
            height={160}
            loading='lazy'
            className='sm:h-60 sm:w-60'
          />
        </picture>
      </div>
    </section>
  );
}
