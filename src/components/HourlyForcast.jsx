const HourlyForcast = ({ forecast }) => {
  const time = new Date().getHours();

  // Format hour.time = '31-3-2023 16:00'
  const filterNextHoursOfDay = forecast[0]?.hour.filter(
    (hour) => hour?.time.split(' ')[1] >= `${time}:00`
  );

  const filterNextHoursNextDay = forecast[1]?.hour.filter(
    (hour) => hour?.time.split(' ')[1] < `${time}:00`
  );

  return (
    <section className='mx-2 my-4 flex gap-5 overflow-scroll rounded-2xl bg-light-violet p-4'>
      {filterNextHoursOfDay?.map((hour, index) => {
        return (
          <div key={index} className='flex flex-col items-center'>
            <h4>{hour?.time.split(' ')[1]}</h4>

            <picture>
              <img
                src={hour?.condition?.icon}
                alt={hour?.condition?.text}
                width='40rem'
                height='40rem'
              />
            </picture>

            <h4>{`${Math.round(hour?.temp_c)}º`}</h4>

            <span>{`${hour?.chance_of_rain}%`}</span>
          </div>
        );
      })}

      {filterNextHoursNextDay?.map((hour, index) => {
        return (
          <div key={index} className='flex flex-col items-center'>
            <h4>{hour?.time.split(' ')[1]}</h4>

            <picture>
              <img
                src={hour?.condition?.icon}
                alt={hour?.condition?.text}
                width='40rem'
                height='40rem'
              />
            </picture>

            <h4>{`${Math.round(hour?.temp_c)}º`}</h4>

            <span>{`${hour?.chance_of_rain}%`}</span>
          </div>
        );
      })}
    </section>
  );
};

export default HourlyForcast;
