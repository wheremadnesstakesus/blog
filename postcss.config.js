module.exports = {
  modules: true,
  plugins: {
    stylelint: {},
    'postcss-import': {},
    'postcss-mixins': {},
    'postcss-preset-env': {
      stage: 0,
      preserve: true,
    },
  },
}
