import { useContext } from 'react';
import Sunrise from '../assets/sunrise.png';
import Sunset from '../assets/sunset.png';
import { ThemeContext } from '../context/ThemeContext';

const SunriseAndSunset = ({ forecast }) => {
  const { sectionsClassName } = useContext(ThemeContext);

  const { forecastday } = forecast;

  // Format astro.sunrise = 07:17 AM
  const sunriseTime = forecastday[0]?.astro?.sunrise;
  const sunrise = sunriseTime.split(' ')[0];

  // Format astro.sunset = 06:54 PM
  const sunsetTime = forecastday[0]?.astro?.sunset.split(' ')[0];
  const splittedSunsetTime = sunsetTime.split(':');

  // Want to turn it into 18:54
  const sunsetHour = parseInt(splittedSunsetTime[0]) + 12;
  const sunsetMinutes = splittedSunsetTime[1];
  const sunset = sunsetHour + ':' + sunsetMinutes;

  return (
    <section
      className={`mx-2 my-4 flex items-center gap-3 rounded-2xl p-4 font-dosis text-2xl sm:w-[36rem] md:w-[46rem] ${sectionsClassName}`}
    >
      <div className='flex w-[50%] flex-col items-center'>
        <h4 className='font-medium'>Sunrise</h4>

        <span>{sunrise}</span>

        <picture>
          <img
            src={Sunrise}
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

        <span>{sunset}</span>

        <picture>
          <img
            src={Sunset}
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
};

export default SunriseAndSunset;
