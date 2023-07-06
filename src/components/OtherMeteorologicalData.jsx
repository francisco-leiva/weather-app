import { useContext } from 'react';
import UVIndexIcon from '../assets/uv-index.png';
import HumidityIcon from '../assets/humidity.png';
import WindIcon from '../assets/wind.png';
import { ThemeContext } from '../context/ThemeContext';

export default function OtherMeteorologicalData({ currentWeather }) {
  const { sectionsClassName } = useContext(ThemeContext);

  const { uv, humidity, wind_kph } = currentWeather;
  const wind = `${Math.round(wind_kph)} km/h`;

  const UVIndexCalculate = (number) => {
    const risk = ['Low', 'Moderate', 'High', 'Very high', 'Extremely high'];

    if (number <= 2) return risk[0];

    if (number <= 5) return risk[1];

    if (number <= 7) return risk[2];

    if (number <= 10) return risk[3];

    if (number >= 11) return risk[4];
  };

  const uvIndex = UVIndexCalculate(uv);

  return (
    <section
      className={`mx-2 my-4 flex items-center justify-between rounded-2xl p-4 sm:mt-0 sm:w-[36rem] sm:justify-around md:w-[46rem] ${sectionsClassName}`}
    >
      <div className='flex flex-col items-center gap-1'>
        <picture>
          <img
            src={UVIndexIcon}
            alt='UV index'
            width={64}
            height={64}
            loading='lazy'
          />
        </picture>

        <h4 className='text-lg font-medium sm:text-2xl'>UV Index</h4>

        <p className='text-lg sm:text-xl'>{uvIndex}</p>
      </div>

      <div className='flex flex-col items-center gap-1'>
        <picture>
          <img
            src={HumidityIcon}
            alt='Humidity'
            width={64}
            height={64}
            loading='lazy'
          />
        </picture>

        <h4 className='text-lg font-medium sm:text-2xl'>Humidity</h4>

        <p className='text-lg sm:text-xl'>{humidity}%</p>
      </div>

      <div className='flex flex-col items-center gap-1'>
        <picture>
          <img
            src={WindIcon}
            alt='Wind'
            width={64}
            height={64}
            loading='lazy'
          />
        </picture>

        <h4 className='text-lg font-medium sm:text-2xl'>Wind</h4>

        <p className='text-lg sm:text-xl'>{wind}</p>
      </div>
    </section>
  );
}
