const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: ['babel-polyfill', './src/index.jsx'],
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.min.js?v=[hash:6]',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        include: [path.join(__dirname, 'src'), /node_modules/],
      },
      {
        test: /\.(png|jpg|gif|svg|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: './public/',
            }
          }
        ]
      },
      {
        test: /\.(ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: './fonts/',
            },
          },
        ],
      },
    ],
  },
  devServer: {
    hot: true,
    contentBase: "./dist",
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
