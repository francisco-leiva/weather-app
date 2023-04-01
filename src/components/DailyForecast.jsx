const DailyForecast = ({ forecast }) => {
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
    <section className='mx-2 my-4 flex flex-col gap-3 rounded-2xl bg-light-violet p-4'>
      {forecast.map((day, index) => {
        // Format day.date = '2023-04-01'
        const date = new Date(day.date).getDay();

        return (
          <div key={index} className='flex gap-4 text-white'>
            <h4>{weekdays[date]}</h4>

            <span>{day?.day?.daily_chance_of_rain}%</span>

            <picture>
              <img
                src={day?.day?.condition?.icon}
                alt={day?.day?.condition?.text}
                width={'30rem'}
                height={'30rem'}
              />
            </picture>

            <span>{Math.round(day?.day?.maxtemp_c)}º</span>

            <span>{Math.round(day?.day?.mintemp_c)}º</span>
          </div>
        );
      })}
    </section>
  );
};

export default DailyForecast;
