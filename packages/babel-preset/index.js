module.exports = {
  plugins: [
    require('babel-plugin-add-module-exports'),
    require('babel-plugin-transform-class-properties'),
  ],
  presets: [
    require('babel-preset-flow'),
    require('babel-preset-react'),
    [
      require('babel-preset-env'),
      {
        targets: {
          node: '6.10',
        },
      },
    ],
  ],
  env: {
    browser: {
      presets: [
        [
          require('babel-preset-env'),
          {
            targets: {
              browsers: '> 1%',
            },
          },
        ],
      ],
    },
  },
}
