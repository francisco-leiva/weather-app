import { useContext } from 'react';
import { DropOfWater } from './Icons';
import { ThemeContext } from '../context/ThemeContext';

const DailyForecast = ({ forecast }) => {
  const { sectionsClassName } = useContext(ThemeContext);
  const { forecastday } = forecast;

  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  return (
    <section
      className={`mx-2 my-4 flex flex-col gap-3 rounded-2xl p-4 font-dosis text-xl sm:my-0 sm:w-[36rem] sm:text-2xl md:w-[46rem] ${sectionsClassName}`}
    >
      {forecastday.map((day, index) => {
        // Format day.date = '2023-04-01'
        const date = new Date(day.date).getUTCDay();
        const dayName = weekdays[date];

        const chanceOfRain = `${day?.day?.daily_chance_of_rain}%`;
        const maxTemp = `${Math.round(day?.day?.maxtemp_c)}º`;
        const minTemp = `${Math.round(day?.day?.mintemp_c)}º`;

        return (
          <div key={index} className='flex items-center justify-between gap-4'>
            <h4 className='w-32 font-medium'>{dayName}</h4>

            <span className='flex w-11 items-center text-base opacity-60 sm:w-14 sm:text-xl'>
              <DropOfWater />

              {chanceOfRain}
            </span>

            <picture className='h-10 w-10 sm:h-14 sm:w-14'>
              <img
                src={day?.day?.condition?.icon}
                alt={day?.day?.condition?.text}
                width={'100%'}
                height={'100%'}
              />
            </picture>

            <span className='font-medium'>{maxTemp}</span>

            <span className='font-medium'>{minTemp}</span>
          </div>
        );
      })}
    </section>
  );
};

export default DailyForecast;
