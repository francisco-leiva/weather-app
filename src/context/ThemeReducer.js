export const ThemeReducer = (state, action) => {
  const { type } = action;

  if (type === 'CLOUDY_DAY') {
    return {
      appClassName: 'cloudyDay',
      sectionsClassName: 'cloudyDaySections',
    };
  }

  if (type === 'RAINY_DAY') {
    return {
      appClassName: 'rainyDay',
      sectionsClassName: 'rainyDaySections',
    };
  }

  if (type === 'SNOWY_DAY') {
    return {
      appClassName: 'snowyDay',
      sectionsClassName: 'snowyDaySections',
    };
  }

  if (type === 'NIGHT') {
    return {
      appClassName: 'nightTheme',
      sectionsClassName: 'nightThemeSections',
    };
  }

  return state;
};
