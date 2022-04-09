/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserJsPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './index.tsx',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'build.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: [path.join(__dirname, 'src'), 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-typescript',
            ['@babel/preset-react', { runtime: 'automatic', importSource: '@emotion/react' }],
          ],
          plugins: [['@babel/plugin-transform-runtime'], ['@emotion']],
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './dist/index.html',
      filename: 'index.html',
    }),
  ],
  optimization: {
    minimizer: [
      new TerserJsPlugin({
        extractComments: false,
      }),
    ],
  },
  devServer: {
    port: 3000,
  },
};
