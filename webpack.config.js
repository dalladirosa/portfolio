const path = require('path')

module.exports = {
  entry: {
    index: ['@babel/polyfill', './public/src/index.js']
  },
  output: {
    path: path.resolve(__dirname, 'public/scripts'),
    filename: '[name].js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    publicPath: '/scripts/'
  },
  devtool: 'source-map'
}
