const webpack = require('webpack');
const path = require('path');

const webpackConfig = {
  entry: {
    app: path.resolve(__dirname, 'src/app.js'),
    vendor: ['vue']
  },
  output: {
    path: path.resolve(__dirname, 'public/build'),
    publicPath: `${process.env.PUBLIC_PATH || ''}/build/`,
    filename: '[name]-bundle.js'
  },
  devtool: '',
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {
          js: 'babel-loader',
          css: 'sass-loader'
        }
      }
    },
    {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    },
    {
      test: /\.(png|jpg|jpeg|gif|woff|woff2|eot|ttf|svg)$/,
      loader: 'file'
    },
    {
      test: /\.(scss|css)$/,
      exclude: /node_modules/,
      loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap'],
      //loaders: ['style', 'css', 'sass']
    }
  ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  devServer: {
    host: 'localhost',
    port: 9003,
    inline: true,
    hot: true,
    contentBase: 'public',
    historyApiFallback: {index: 'index.html'},
    stats: {
      chunks: false
    }
  }
};

module.exports = webpackConfig;
