export const ThemeReducer = (state, action) => {
  const { type } = action;

  if (type === 'CLOUDY_DAY') {
    return {
      theme: 'cloudy',
    };
  }

  if (type === 'RAINY_DAY') {
    return {
      theme: 'rainy',
    };
  }

  if (type === 'SNOWY_DAY') {
    return {
      theme: 'snowy',
    };
  }

  if (type === 'NIGHT') {
    return {
      theme: 'night',
    };
  }

  return state;
};
