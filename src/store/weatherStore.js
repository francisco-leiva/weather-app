import { create } from "zustand";

export const useWeatherStore = create(() => ({
  weather: {},
  loading: true,
  theme: ''
}))

export const setWeather = (weather) => useWeatherStore.setState({ weather })
export const setLoading = (loading) => useWeatherStore.setState({ loading })
export const setTheme = (theme) => useWeatherStore.setState({ theme })