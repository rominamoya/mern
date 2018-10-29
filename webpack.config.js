const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');


const DIST_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');

const config = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
    publicPath: '/',
  },
  performance: {
    hints: false,
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.es6'],
  },
  devServer: {
    historyApiFallback: true,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-2'],
        },
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['eslint-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
};
module.exports = config;
