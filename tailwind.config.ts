import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        green: {
          '50': '#f3faf9',
          '100': '#d7f0ed',
          '200': '#afe0db',
          '300': '#80c8c5',
          '400': '#55acab',
          '500': '#3d9494',
          '600': '#2e7173',
          '700': '#285b5d',
          '800': '#24494b',
          '900': '#213f40',
          '950': '#0e2325',
        },
        plantation: {
          '50': '#f3fafa',
          '100': '#d6f1ed',
          '200': '#ade2dd',
          '300': '#7cccc7',
          '400': '#50b1ae',
          '500': '#379593',
          '600': '#2a7677',
          '700': '#255f60',
          '800': '#214c4d',
          '900': '#1f4242',
          '950': '#0d2526',
        },
        mm: {
          300: '#E8F1F2',
          500: '#3D9494',
          600: '#214C4D',
          700: '#190B28',
        },
        orange: {
          '50': '#fcf5f4',
          '100': '#fae9e6',
          '200': '#f7d6d1',
          '300': '#f0b9b1',
          '400': '#e8998d',
          '500': '#d86b5b',
          '600': '#c4503e',
          '700': '#a44031',
          '800': '#88382c',
          '900': '#72332a',
          '950': '#3d1812',
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
