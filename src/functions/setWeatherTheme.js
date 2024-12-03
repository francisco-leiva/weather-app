const TYPES_OF_WEATHER = {
  sunny_day: 'sunny',
  cloudy_day: 'cloudy',
  rainy_day: 'rainy',
  snowy_day: 'snowy',
  night: 'night',
};

export const setWeatherTheme = (conditionCode, isItDay) => {
  // codes for time conditions
  const sunnyDayCode = 1000;
  const cloudyDayCode = [1006, 1009, 1030, 1135];
  const rainyDayCode = [
    1063, 1072, 1087, 1150, 1153, 1168, 1171, 1180, 1183, 1186, 1189, 1192,
    1195, 1198, 1201, 1237, 1240, 1243, 1246, 1258, 1261, 1264, 1273, 1276,
  ];
  const snowyDayCode = [
    1066, 1114, 1210, 1213, 1216, 1219, 1222, 1225, 1255, 1258, 1279, 1282,
  ];

  if (isItDay === 0) {
    return TYPES_OF_WEATHER.night;
  }

  if (conditionCode === sunnyDayCode) {
    return TYPES_OF_WEATHER.sunny_day;
  }

  if (cloudyDayCode.includes(conditionCode)) {
    return TYPES_OF_WEATHER.cloudy_day;
  }

  if (rainyDayCode.includes(conditionCode)) {
    return TYPES_OF_WEATHER.rainy_day;
  }

  if (snowyDayCode.includes(conditionCode)) {
    return TYPES_OF_WEATHER.snowy_day;
  }
};
