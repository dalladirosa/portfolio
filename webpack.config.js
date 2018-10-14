const path = require('path')
require('@babel/polyfill')

module.exports = {
  mode: 'production',
  entry: {
    index: './public/src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       exclude: /node_modules/,
  //       use: {
  //         loader: 'babel-loader',
  //         options: {
  //           presets: ['@babel/preset-env']
  //         }
  //       },
  //       query: require('./.babelrc') // reference to babel rules
  //     }
  //   ]
  // },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    publicPath: '/scripts/'
  },
  devtool: 'source-map'
}
