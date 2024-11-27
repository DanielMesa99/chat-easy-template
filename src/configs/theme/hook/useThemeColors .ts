import { useColorScheme } from 'nativewind';

/** Custom dependencies **/
import { colors } from '../colors';

/**
 * Hook to retrieve the current theme colors based on the system's color scheme.
 *
 * It uses the `useColorScheme` hook from NativeWind to detect whether the system
 * is in `light` or `dark` mode and returns the corresponding color palette.
 *
 * @returns {Record<string, string>} The color palette for the current theme (light or dark).
 */
const useThemeColors = (): Record<string, string> => {
  const { colorScheme } = useColorScheme();

  /**
   * Determine the theme to use. Defaults to "light" if `colorScheme` is undefined.
   */
  const theme: 'light' | 'dark' = colorScheme === 'dark' ? 'dark' : 'light';

  return colors[theme];
};

export { useThemeColors };
