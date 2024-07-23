import type { Config } from "tailwindcss";
import colors from 'tailwindcss/colors'

const config: Config = {
  content: ['./build/**/*.{html,js}', './src/**/*.{html,tsx}'],
  theme: {
    extend: {},
    colors: {
      dark: '#101010',
      grey: '#171717',
      reds: '#240E0D',
      blues: '#171C28',
      black: colors.black,
      white: '#ffffff',
      lightGrey: '#858585',
      ...colors
    }
  },
  plugins: [],
}
export default config;
