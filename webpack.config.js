var webpack = require("webpack");

const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          loader: 'style!css!sass?outputStyle=expanded',
        },
      ], // was a semicolon

      plugins: [
        {
          new BundleAnalyzerPlugin(),
        },
      ], //was a semicolon

      devServer: [
      {
          contentBase: path.join(__dirname, 'public'),
          port: 8080,
      },
      ], //was a semicolon
    },
};
