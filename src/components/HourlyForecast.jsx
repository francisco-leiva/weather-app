import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const HourlyForecast = ({ forecast }) => {
  const { sectionsClassName } = useContext(ThemeContext);

  const { forecastday } = forecast;
  const todaysHours = forecastday[0]?.hour;
  const tomorrowsHours = forecastday[1]?.hour;
  const time = new Date().getHours();

  // Format hour.time = '31-3-2023 16:00'
  const filterNextHoursOfDay = todaysHours.filter(
    (hour) => hour?.time.split(' ')[1] >= `${time}:00`
  );

  const filterNextHoursNextDay = tomorrowsHours.filter(
    (hour) => hour?.time.split(' ')[1] < `${time}:00`
  );

  return (
    <section
      className={`mx-2 my-4 flex gap-4 overflow-x-scroll rounded-2xl p-4 font-dosis text-lg text-white ${sectionsClassName}`}
    >
      {filterNextHoursOfDay.map((hour, index) => {
        return (
          <div
            key={index}
            className='flex flex-col items-center justify-between'
          >
            <h3>{hour?.time.split(' ')[1]}</h3>

            <picture className='h-12 w-12'>
              <img
                src={hour?.condition?.icon}
                alt={hour?.condition?.text}
                width={'100%'}
                height={'100%'}
              />
            </picture>

            <h4>{`${Math.round(hour?.temp_c)}º`}</h4>

            <span>{`${hour?.chance_of_rain}%`}</span>
          </div>
        );
      })}

      {filterNextHoursNextDay.map((hour, index) => {
        return (
          <div
            key={index}
            className='flex flex-col items-center justify-between'
          >
            <h3>{hour?.time.split(' ')[1]}</h3>

            <picture className='h-12 w-12'>
              <img
                src={hour?.condition?.icon}
                alt={hour?.condition?.text}
                width={'100%'}
                height={'100%'}
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

export default HourlyForecast;
