import { useContext } from 'react';
import UVIndexIcon from '../assets/uv-index.png';
import HumidityIcon from '../assets/humidity.png';
import WindIcon from '../assets/wind.png';
import { ThemeContext } from '../context/ThemeContext';

const OtherMeteorologicalData = ({ currentWeather }) => {
  const { sectionsClassName } = useContext(ThemeContext);

  const { uv, humidity, wind_kph } = currentWeather;
  const wind = `${Math.round(wind_kph)} km/h`;
  let UVIndex = '';

  const UVIndexCalculate = (number) => {
    if (number <= 2) {
      UVIndex = 'Low';
      return UVIndex;
    }

    if (number <= 5) {
      UVIndex = 'Moderate';
      return UVIndex;
    }

    if (number <= 7) {
      UVIndex = 'High';
      return UVIndex;
    }

    if (number <= 10) {
      UVIndex = 'Very high';
      return UVIndex;
    }

    if (number >= 11) {
      UVIndex = 'Extremely high';
      return UVIndex;
    }
  };

  UVIndexCalculate(uv);

  return (
    <section
      className={`mx-2 my-4 flex items-center justify-between rounded-2xl p-4 font-dosis text-xl text-white sm:mt-0 sm:w-[36rem] sm:justify-around ${sectionsClassName}`}
    >
      <div className='flex flex-col items-center gap-1'>
        <picture>
          <img src={UVIndexIcon} alt='UV index' />
        </picture>

        <h4>UV Index</h4>

        <p>{UVIndex}</p>
      </div>

      <div className='flex flex-col items-center gap-1'>
        <picture>
          <img src={HumidityIcon} alt='Humidity' />
        </picture>

        <h4>Humidity</h4>

        <p>{humidity}%</p>
      </div>

      <div className='flex flex-col items-center gap-1'>
        <picture>
          <img src={WindIcon} alt='Wind' />
        </picture>

        <h4>Wind</h4>

        <p>{wind}</p>
      </div>
    </section>
  );
};

export default OtherMeteorologicalData;
