import HtmlWebPackPlugin from 'html-webpack-plugin';
import { resolve } from 'path';

module.exports = {
  entry: resolve(__dirname, '..', './src/js/index.js'),
  mode: 'development',
  module: {
    rules: [{
      test: /\.(js)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    },
    {
      test: /\.html$/,
      use: [{
        loader: 'html-loader'
      }]
    },
    {
      test: /\.(png|svg|jpg|gif)$/,
      use: [
        'file-loader'
      ]
    },
    {
      test: /\.css$/,
      use: [
        { loader: 'style-loader' },
        { loader: 'css-loader' }
      ]
    }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, '..', './dist'),
    publicPath: '/'
  },
  plugins: [
    new HtmlWebPackPlugin({
      filename: resolve(__dirname, '..', './dist/index.html'),
      template: resolve(__dirname, '..', './src/index.html')
    })
  ]
};
