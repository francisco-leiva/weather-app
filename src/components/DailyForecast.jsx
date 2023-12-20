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
    <section className='mx-2 my-4 flex flex-col gap-3 rounded-2xl bg-[--bg-sections] p-4 text-lg sm:my-0 sm:w-[36rem] sm:text-2xl md:w-[46rem]'>
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
          <div key={index} className='flex items-center justify-between gap-1'>
            <h4 className='w-28 font-medium sm:w-36'>{nameOfDay}</h4>

            <div className='flex w-12 items-center opacity-60 sm:w-14'>
              <DropOfWater />

              <span className='text-sm sm:text-xl'>{chanceOfRain}</span>
            </div>

            <picture>
              <img
                src={condition.icon}
                alt={condition.text}
                width={40}
                height={40}
                className='h-10 w-10 sm:h-14 sm:w-14'
              />
            </picture>

            <span className='font-medium'>{maxTemp}</span>

            <span className='font-medium'>{minTemp}</span>
          </div>
        );
      })}
    </section>
  );
}
