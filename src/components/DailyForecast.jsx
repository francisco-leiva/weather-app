import { DropOfWater } from './Icons';

export default function DailyForecast({ forecast }) {
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
    <section className='mx-auto my-4 flex max-w-[46rem] flex-col gap-3 rounded-2xl bg-[--bg-sections] p-4 text-lg sm:text-2xl'>
      {forecast.map((forecastDay, index) => {
        const { date, day } = forecastDay;
        const { daily_chance_of_rain, maxtemp_c, mintemp_c, condition } = day;

        // date format = '2023-04-01'
        const getDay = new Date(date).getUTCDay();
        const nameOfDay = weekdays[getDay];

        const chanceOfRain = daily_chance_of_rain + '%';
        const maxTemp = Math.round(maxtemp_c) + 'º';
        const minTemp = Math.round(mintemp_c) + 'º';

        return (
          <div
            key={index}
            className='grid grid-cols-dailyforecast-sm items-center justify-items-center sm:grid-cols-dailyforecast-md'
          >
            <h4 className='justify-self-start font-medium'>{nameOfDay}</h4>

            <div className='flex items-center opacity-60'>
              <DropOfWater />

              <span className='text-sm sm:text-xl'>{chanceOfRain}</span>
            </div>

            <img
              src={condition.icon}
              alt={condition.text}
              width={40}
              height={40}
              className='h-10 w-10 sm:h-14 sm:w-14'
            />

            <span className='font-medium'>{maxTemp}</span>

            <span className='font-medium'>{minTemp}</span>
          </div>
        );
      })}
    </section>
  );
}
