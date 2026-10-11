const API_KEY = import.meta.env.WEATHER_API_KEY || import.meta.env.VITE_WEATHER_API_KEY

export async function fetchWeather(query) {
  try {
    const params = new URLSearchParams({
      key: API_KEY,
      q: query,
      days: 3,
      aqi: 'no',
      alerts: 'no',
    });
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?${params}`
    );

    if (!response.ok) {
      console.log("API not responding");
      throw new Error(response.status);
    }

    const data = await response.json();
    const weather = {
      currentWeather: data.current,
      city: data.location.name,
      forecast: data.forecast.forecastday,
      conditionCode: data.current.condition.code,
      isDay: data.current.is_day,
    };

    return weather;
  } catch (err) {
    console.error(
      'No se pudo encontrar la ubicación, estado de respuesta:',
      err
    );
  }
}
