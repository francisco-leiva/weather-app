import UVIndexIcon from '../assets/uv-index.png';
import HumidityIcon from '../assets/humidity.png';
import WindIcon from '../assets/wind.png';

export default function OtherMeteorologicalData({ currentWeather }) {
  const { uv, humidity, wind_kph } = currentWeather;
  const wind = `${Math.round(wind_kph)} km/h`;
  const humidityText = humidity + '%';

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
    <section className='mx-auto my-4 grid max-w-[46rem] grid-cols-[1fr_1fr_1fr] rounded-2xl bg-[--bg-sections] p-4'>
      <div className='flex flex-col items-center gap-1 justify-self-start sm:justify-self-center'>
        <img
          src={UVIndexIcon}
          alt='UV index'
          width={64}
          height={64}
          loading='lazy'
        />

        <h4 className='text-lg font-medium sm:text-2xl'>UV Index</h4>

        <p className='text-lg sm:text-xl'>{uvIndex}</p>
      </div>

      <div className='flex flex-col items-center gap-1 justify-self-center'>
        <img
          src={HumidityIcon}
          alt='Humidity'
          width={64}
          height={64}
          loading='lazy'
        />

        <h4 className='text-lg font-medium sm:text-2xl'>Humidity</h4>

        <p className='text-lg sm:text-xl'>{humidityText}</p>
      </div>

      <div className='flex flex-col items-center gap-1 justify-self-end sm:justify-self-center'>
        <img src={WindIcon} alt='Wind' width={64} height={64} loading='lazy' />

        <h4 className='text-lg font-medium sm:text-2xl'>Wind</h4>

        <p className='text-lg sm:text-xl'>{wind}</p>
      </div>
    </section>
  );
}
