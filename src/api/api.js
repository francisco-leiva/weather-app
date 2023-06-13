import axios from 'axios';

const API_URL = 'https://api.weatherapi.com/v1/forecast.json';
const API_KEY = '27108248a8404184a5222207233103';

export async function fetchData(query) {
  try {
    const response = await axios.get(API_URL, {
      params: {
        key: API_KEY,
        q: query,
        days: 7,
        aqi: 'no',
        alerts: 'no',
      },
    });
    const data = await response.data;

    // returns a code for each type of weather
    const conditionCode = data?.current?.condition?.code;
    // returns 1 if it's day and 0 if it's night
    const isDay = data?.current?.is_day;

    return { data, conditionCode, isDay };
  } catch (err) {
    throw new Error('No se pudo encontrar la ubicación');
  }
}
