import { createContext, useReducer } from 'react';
import { ThemeReducer } from './ThemeReducer';

export const ThemeContext = createContext([]);

const initialState = {
  theme: 'sunny',
};

export function ThemeContextProvider({ children }) {
  const [state, dispatch] = useReducer(ThemeReducer, initialState);

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
      dispatch({
        type: 'NIGHT',
      });
      return;
    }

    if (cloudyDayCode.includes(conditionCode)) {
      dispatch({
        type: 'CLOUDY_DAY',
      });
    }

    if (rainyDayCode.includes(conditionCode)) {
      dispatch({
        type: 'RAINY_DAY',
      });
    }

    if (snowyDayCode.includes(conditionCode)) {
      dispatch({
        type: 'SNOWY_DAY',
      });
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: state.theme,
        dayCondition,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
