export const ThemeReducer = (state, action) => {
  const { type } = action;

  if (type === 'CLOUDY_DAY') {
    return {
      ...state,
      appClassName: 'cloudyDay',
      sectionsClassName: 'cloudyDaySections',
    };
  }

  if (type === 'RAINY_DAY') {
    return {
      ...state,
      appClassName: 'rainyDay',
      sectionsClassName: 'rainyDaySections',
    };
  }

  if (type === 'SNOWY_DAY') {
    return {
      ...state,
      appClassName: 'snowyDay',
      sectionsClassName: 'snowyDaySections',
    };
  }

  if (type === 'NIGHT') {
    return {
      ...state,
      appClassName: 'nightTheme',
      sectionsClassName: 'nightThemeSections',
    };
  }

  return state;
};
