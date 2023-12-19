import { createContext, useState } from 'react';

export const ThemeContext = createContext([]);

const CONDITION_TYPES = {
  cloudy_day: 'cloudy',
  rainy_day: 'rainy',
  snowy_day: 'snowy',
  night: 'night',
};

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState('sunny');

  const dayCondition = (conditionCode, isItDay) => {
    // codes for time conditions
    const cloudyDayCode = [1006, 1009, 1030, 1135];
    const rainyDayCode = [
      1063, 1072, 1087, 1150, 1153, 1168, 1171, 1180, 1183, 1186, 1189, 1192,
      1195, 1198, 1201, 1237, 1240, 1243, 1246, 1258, 1261, 1264, 1273, 1276,
    ];
    const snowyDayCode = [
      1066, 1114, 1210, 1213, 1216, 1219, 1222, 1225, 1255, 1258, 1279, 1282,
    ];

    if (isItDay === 0) {
      setTheme(CONDITION_TYPES.night);
      return;
    }

    if (cloudyDayCode.includes(conditionCode)) {
      setTheme(CONDITION_TYPES.cloudy_day);
    }

    if (rainyDayCode.includes(conditionCode)) {
      setTheme(CONDITION_TYPES.rainy_day);
    }

    if (snowyDayCode.includes(conditionCode)) {
      setTheme(CONDITION_TYPES.snowy_day);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        dayCondition,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
