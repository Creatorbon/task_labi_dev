const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
  entry: [
    './src/index.js',
    './static/styles.scss',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                autoprefixer(),
              ],
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devServer: {
    contentBase: path.join(__dirname, 'static'),
    watchContentBase: true,
  },
  devtool: IS_PRODUCTION ? 'cheap-module-eval-source-map' : 'source-map',
  mode: IS_PRODUCTION ? 'production' : 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: './static/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: IS_PRODUCTION ? '[name].[hash].css' : '[name].css',
    }),
  ],
};
