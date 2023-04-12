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

  // Format forecastday[0].date = 2023-04-04, format astro.sunset = 06:54 PM
  const sunsetFullDate = `${forecastday[0]?.date} ${forecastday[0]?.astro?.sunset}`;

  // Want to turn it into 18:54
  const sunsetHour = new Date(sunsetFullDate).getHours();
  const sunsetMinutes = new Date(sunsetFullDate).getMinutes();
  const sunset = sunsetHour + ':' + sunsetMinutes;

  return (
    <section
      className={`mx-2 my-4 flex items-center gap-3 rounded-2xl p-4 font-dosis text-2xl text-white sm:w-[36rem] md:w-[46rem] ${sectionsClassName}`}
    >
      <div className='flex w-[50%] flex-col items-center'>
        <h4 className='font-medium'>Sunrise</h4>

        <span>{sunrise}</span>

        <picture className='h-40 w-40 sm:h-60 sm:w-60'>
          <img src={Sunrise} alt='Sunrise' width={'100%'} height={'100%'} />
        </picture>
      </div>

      <div className='flex w-[50%] flex-col items-center'>
        <h4 className='font-medium'>Sunset</h4>

        <span>{sunset}</span>

        <picture className='h-40 w-40 sm:h-60 sm:w-60'>
          <img src={Sunset} alt='Sunset' width={'100%'} height={'100%'} />
        </picture>
      </div>
    </section>
  );
};

export default SunriseAndSunset;
