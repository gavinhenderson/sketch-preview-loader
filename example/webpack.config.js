const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

const sketchLoaderPath = path.join(__dirname, '../dist/loader.js');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(sketch)$/,
        exclude: /node_modules/,
        use: [
          'file-loader',
          {
            loader: sketchLoaderPath,
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
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
