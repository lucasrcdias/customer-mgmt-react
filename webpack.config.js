const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractSass = new ExtractTextPlugin({
  filename: "[name].[contenthash].css",
  disable: process.env.NODE_ENV === "development"
});

module.exports = {
  entry: "./src/index.js",
  output: {
    path: `${__dirname}/public`,
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['.js', '.jsx', '.sass']
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.sass$/,
      use: extractSass.extract({
        use: [{
          loader: "css-loader", options: { sourceMap: true }
        }, {
          loader: "sass-loader", options: { sourceMap: true }
        }],
        fallback: "style-loader"
      })
    },
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    }]
  },
  plugins: [
    extractSass
  ],
  devServer: {
    inline: true,
    contentBase: "./public",
    port: 3001
  }
}