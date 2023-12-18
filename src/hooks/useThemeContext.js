import { useContext, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export function useThemeContext({ conditionCode, isDay }) {
  const { theme, dayCondition } = useContext(ThemeContext);

  useEffect(() => {
    dayCondition(conditionCode, isDay);
  }, [conditionCode, isDay]);

  return theme;
}
