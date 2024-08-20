import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        mm: {
          300: '#E8F1F2',
          500: '#3D9494',
          600: '#214C4D',
          700: '#190B28',
        },
        sunburst: {
          400: '#E8998D',
        },
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(-10.0deg)' },
          '20%': { transform: 'rotate(12.0deg)' },
          '30%': { transform: 'rotate(-10.0deg)' },
          '40%': { transform: 'rotate(9.0deg)' },
          '50%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
      },
      animation: {
        wave: 'wave 1.2s ease infinite',
      },
      fontFamily: {
        sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
        gloria: ['"Gloria Hallelujah"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
