/* eslint-disable no-undef */

const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const babelConfig = require('../babel.config');

const webpackCommonConfig = {
  entry: {
    app: './index.jsx'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: babelConfig
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },
      {
        test: /\.(csv|tsv)$/,
        use: ['csv-loader']
      },
      {
        test: /\.xml$/,
        use: ['xml-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'React Starter App',
      filename: 'index.html',
      meta: {
        charset: { charset: 'utf-8' },
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
      },
      favicon: path.resolve(__dirname, '../src/favicon.ico'),
      template: path.resolve(__dirname, '../src/index.html'),
      bootstrapCss: 'vendor/bootstrap/css/bootstrap.min.css',
      bootstrapJs: 'vendor/bootstrap/css/bootstrap.min.css',
      jquery: 'vendor/jquery/jquery.min.js',
      fontAwesomeCss: 'vendor/fontawesome/css/all.min.css',
      fontAwesomeJs: 'vendor/fontawesome/js/all.min.js'
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(
          __dirname,
          '../node_modules/bootstrap/dist/css/bootstrap.min.css'
        ),
        to: path.resolve(__dirname, '../dist/vendor/bootstrap/css')
      },
      {
        from: path.resolve(
          __dirname,
          '../node_modules/bootstrap/dist/css/bootstrap.min.css.map'
        ),
        to: path.resolve(__dirname, '../dist/vendor/bootstrap/css')
      },
      {
        from: path.resolve(
          __dirname,
          '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
        ),
        to: path.resolve(__dirname, '../dist/vendor/bootstrap/js')
      },
      {
        from: path.resolve(
          __dirname,
          '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js.map'
        ),
        to: path.resolve(__dirname, '../dist/vendor/bootstrap/js')
      },
      {
        from: path.resolve(
          __dirname,
          '../node_modules/jquery/dist/jquery.min.js'
        ),
        to: path.resolve(__dirname, '../dist/vendor/jquery')
      },
      {
        from: path.resolve(
          __dirname,
          '../node_modules/jquery/dist/jquery.min.map'
        ),
        to: path.resolve(__dirname, '../dist/vendor/jquery')
      },
      {
        from: path.resolve(
          __dirname,
          '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
        ),
        to: path.resolve(__dirname, '../dist/vendor/fontawesome/css')
      },
      {
        from: path.resolve(
          __dirname,
          '../node_modules/@fortawesome/fontawesome-free/js/all.min.js'
        ),
        to: path.resolve(__dirname, '../dist/vendor/fontawesome/js')
      }
    ])
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist')
  }
};

module.exports = webpackCommonConfig;
