module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        'custom-green': {
          '100': '#EDF5E1',
          '200': '#8EE4AF',
          '300': '#5CDB95',
          '400': '#379683',
          '500': '#05386B',
          '600': '#00a57d',
          '700': '#098e6f'
        },
        'custom-blue': '#2c3e50'
      },
      colors: {
        'custom-green': {
          '100': '#EDF5E1',
          '200': '#8EE4AF',
          '300': '#5CDB95',
          '400': '#379683',
          '500': '#05386B',
          '600': '#00a57d',
          '700': '#098e6f'
        },
        'custom-blue': '#2c3e50'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
