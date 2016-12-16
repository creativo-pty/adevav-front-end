'use strict';

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

const config = {
  context: __dirname + '/src',
  entry: './index.js',
  output: {
    path: __dirname + '/src',
    filename: 'bundle.js'
  },

  devServer: {
    inline: true,
    contentBase: 'src',
    historyApiFallback: {
      index: 'index.html'
    }
  },

  devtool: 'source-map',

  plugins: [
    new ExtractTextPlugin('style.css', {
      allChunks: true
    })
  ],

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015']
      }
    }, {
      test: /\.html$/,
      exclude: /node_modules/,
      loader: 'raw'
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style', 'css')
    }, {
      test: /\.less$/,
      exclude: /node_modules/,
      loader: ExtractTextPlugin.extract('style', 'css!less')
    }, {
      test: /\.(png|jpg|svg)/,
      loader: 'file'
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file'
    }, {
      test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=5000&mimetype=application/font-woff'
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/octet-stream'
    }]
  }
};

const globalDefinitions = {
  ADEVAV_BACKEND: JSON.stringify(process.env.ADEVAV_BACKEND || '/')
};

config.plugins.push(new webpack.DefinePlugin(globalDefinitions));

config.plugins.push(new webpack.ProvidePlugin({
  moment:'moment/moment'
}));

if (process.env.NODE_ENV === 'production') {

  config.output.path = __dirname + '/dist';

  config.plugins.push(new HtmlPlugin({
    hash: true,
    favicon: './img/favicon.png'
  }));

  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }));
}

module.exports = config;
