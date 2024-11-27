/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
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
        },
      },
    },
  },
  plugins: [],
};
