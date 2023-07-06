import axios from 'axios';

const API_URL = 'https://api.weatherapi.com/v1/forecast.json';
const API_KEY = '27108248a8404184a5222207233103';

export async function fetchData(query) {
  try {
    const response = await axios.get(API_URL, {
      params: {
        key: API_KEY,
        q: query,
        days: 3,
        aqi: 'no',
        alerts: 'no',
      },
    });
    const data = await response.data;

    const weather = {
      currentWeather: data?.current,
      location: data?.location,
      forecast: data?.forecast?.forecastday,
    };

    // returns a code for each type of weather
    const conditionCode = weather.currentWeather.condition.code;
    // returns 1 if it's day and 0 if it's night
    const isDay = weather.currentWeather.is_day;

    return { weather, conditionCode, isDay };
  } catch (err) {
    throw new Error('No se pudo encontrar la ubicación');
  }
}
