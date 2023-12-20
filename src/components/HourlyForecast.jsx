export default function HourlyForecast({ forecast }) {
  const todaysHours = forecast[0].hour;
  const tomorrowsHours = forecast[1].hour;
  const currHour = new Date().getHours();

  // filter next hours from current time
  // hour.time format = '31-3-2023 16:00'
  const nextHoursOfToday = todaysHours.filter((hour) => {
    const getHour = new Date(hour.time).getHours();
    return getHour >= currHour;
  });

  const nextHoursOfTomorrow = tomorrowsHours.filter((hour) => {
    const getHour = new Date(hour.time).getHours();
    return getHour < currHour;
  });

  const hourlyForecast = [...nextHoursOfToday, ...nextHoursOfTomorrow];

  return (
    <section className='my-4 w-full max-w-[46rem] overflow-hidden rounded-2xl bg-[--bg-sections] text-xl sm:text-2xl'>
      <div className='hourlyForecast m-2 flex min-h-[10rem] w-full gap-4 overflow-hidden overflow-x-scroll p-2 sm:gap-6 lg:mb-[0.1rem]'>
        {hourlyForecast.map((hour, index) => {
          const { time, temp_c, chance_of_rain, condition } = hour;
          // time = '31-3-2023 16:00'
          const hourText = time.split(' ')[1];
          const hourTemp = Math.round(temp_c) + 'º';
          const hourChanceOfRain = chance_of_rain + '%';

          return (
            <div
              key={index}
              className='flex flex-col items-center justify-between'
            >
              <h3>{hourText}</h3>

              <picture className='h-12 w-12'>
                <img
                  src={condition.icon}
                  alt={condition.text}
                  width={48}
                  height={48}
                />
              </picture>

              <h4>{hourTemp}</h4>

              <span>{hourChanceOfRain}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
