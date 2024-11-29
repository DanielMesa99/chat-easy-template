/**
 * Interface representing the color scheme for light and dark modes.
 */
interface ColorScheme {
  background: string;
  onBackground: string;
  primaryContainer: string;
  onPrimaryContainer: string;
  secondaryContainer: string;
  onSecondaryContainer: string;
  primary: string;
  onPrimary: string;
  secondary: string;
  onSecondary: string;
  sub: string;
  line: string;
}

/**
 * Interface representing the overall colors object containing light and dark color schemes.
 */
interface Colors {
  light: ColorScheme;
  dark: ColorScheme;
}

/**
 * Object containing color schemes for both light and dark modes.
 */
const colors: Colors = {
  light: {
    background: 'white',
    onBackground: '#000000',
    primaryContainer: '#f9fafe',
    onPrimaryContainer: 'black',
    secondaryContainer: '#e9ebf0',
    onSecondaryContainer: 'black',
    primary: '#007CBA',
    onPrimary: 'white',
    secondary: '#C71585',
    onSecondary: 'white',
    sub: 'gray',
    line: '#D1D5DB',
  },
  dark: {
    background: '#1E1E2D',
    onBackground: 'white',
    primaryContainer: '#33334A',
    onPrimaryContainer: 'white',
    secondaryContainer: '#2a2a3d',
    onSecondaryContainer: 'white',
    primary: '#007CBA',
    onPrimary: 'white',
    secondary: '#C71585',
    onSecondary: 'white',
    sub: '#D3D3D3',
    line: 'black',
  },
};

export { colors, ColorScheme };
