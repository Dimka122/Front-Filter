/* eslint-env node */

module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#FFB17A',
          100: '#FF9E59',
          200: '#FF5F00',
          300: '#FF3D00',
        },
        grey: {
          100: '#F4F4F4',
          200: '#B4B4B4',
          300: '#7E7E7E',
          400: '#474747',
          500: '#31393C',
        },
        primary: {
          100: '#078691',
        },
      },
      borderRadius: {
        xl: '16px',
      },
    },
  },
  plugins: [],
};