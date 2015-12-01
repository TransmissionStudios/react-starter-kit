var webpack           = require('webpack');
var path              = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var srcPath           = path.join(__dirname, 'src');
var distPath          = path.join(__dirname, 'dist');

module.exports = {

  // The base directory for resolving `entry` (must be absolute path)
  context: srcPath,

  entry: {
    index: 'index.js'
  },

  output: {
    path: distPath,
    publicPath: '/',
    filename: 'bundle.js'
  },

  plugins: [
    // Render an index.html for the app
    new HtmlWebpackPlugin({
      inject: 'body',
      template: 'src/index.html'
    })
  ],

  // Enable loading modules relatively to root (without the ../../ prefix).
  resolve: {
    root: [srcPath]
  },

  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets:['react', 'es2015']
        }
      },
      { test: /\.css$/,
        loaders: ['style', 'css', 'autoprefixer']
      },
      { test: /\.(ttf|eot|svg|otf|png|jpg|woff|woff2)$/,
        loader: 'file'
      }
    ]
  },

  // Settings for webpack-dev-server
  // `--hot` and `--progress` must be set using CLI
  devServer: {
    contentBase: './src',
    colors: true,
    noInfo: true,
    inline: true,
    historyApiFallback: true
  },

  devtool: '#inline-source-map'
};
