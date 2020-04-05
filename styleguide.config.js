const path = require('path')

module.exports = {
  components: path.join(__dirname, 'components/**/*.tsx'),
  propsParser: require('react-docgen-typescript').withCustomConfig('./tsconfig.json').parse,
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'components/ThemeWrapper')
  },
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: require.resolve('babel-loader'),
            options: {
              presets: [require.resolve('babel-preset-react-app')],
            }
          }
        }
      ]
    }
  }
}
