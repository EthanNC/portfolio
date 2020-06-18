const colors = require('./colors');

module.exports = {
  purge: [
    './src/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.primary,
        primaryLight: colors.primaryLight,
        primaryDark: colors.primaryDark,
        secondary: colors.secondary,
        secondaryLight: colors.secondaryLight,
        secondaryDark: colors.secondaryDark
        
      }
    }
  },
  variants: {},
  plugins: []
}
