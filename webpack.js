'use strict';

const webpack = require('webpack'),
  	 glob = require('glob');


let config = {
  entry: {
    'src/pages/ionic-datepicker': [
    ],

    // Auto-detect all pages in directory.
    'myPages': glob.sync('./path/to/**/*.js'),
  },
  module: {
    loaders: [
      // CSS: scss, css
      {
        test: /\.s?css$/,
        loaders: ['style', 'css', 'sass', 'postcss-loader']
      },
      // HTML: htm, html
      {
        test: /\.html?$/,
        loader: "file?name=[name].[ext]"
      }
    ]
  },
  output: {
    path: './dist',
    filename: 'bundle--[name].js'
  },
  plugins: [
    // Pro-tip: Order matters here.
    new webpack.optimize.CommonsChunkPlugin([‘myPages’, 'vendor'], 'bundle--[name].js'),
    // Minify assets.
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false 
      }
    })
  ]
};

module.exports = config;