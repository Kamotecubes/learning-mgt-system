import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        green: {
          50: '#EFFDF5',
          100: '#D9FBE8',
          200: '#B3F5D1',
          300: '#75EDAE',
          400: '#00DC82',
          500: '#00C16A',
          600: '#00A155',
          700: '#007F45',
          800: '#016538',
          900: '#0A5331',
          950: '#052e16'
        },
        maroon: {
            '50': '#ffeeee',
            '100': '#ffdada',
            '200': '#ffbbbb',
            '300': '#ff8b8b',
            '400': '#ff4949',
            '500': '#ff1111',
            '600': '#ff0000',
            '700': '#e70000',
            '800': '#be0000',
            '900': '#800000',
            '950': '#560000',
          }
      }
    }
  }
}