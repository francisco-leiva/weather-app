import axios from 'axios';

const API_URL = 'https://api.weatherapi.com/v1/forecast.json';
const API_KEY = '27108248a8404184a5222207233103';

export async function fetchWeather(query) {
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
      currentWeather: data.current,
      city: data.location.name,
      forecast: data.forecast.forecastday,
      conditionCode: data.current.condition.code,
      isDay: data.current.is_day,
    };

    return weather;
  } catch (err) {
    throw new Error('No se pudo encontrar la ubicación');
  }
}
