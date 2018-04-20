import path from 'path';
import merge from 'webpack-merge';
import webpack from 'webpack';
import commonConfig from './webpack.config.common';
import { version } from './package.json';

const config = merge(commonConfig, {
  mode: 'development',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8090',
    'babel-polyfill',
    './index.js'
  ],
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, `build-v${version}`),
    filename: 'bundle.js',
    hotUpdateChunkFilename: 'hot/hot-update.js',
    hotUpdateMainFilename: 'hot/hot-update.json'
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.css$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader'
          }]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': '"development"'
    // })
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, `build-v${version}`),
    compress: true,
    hot: true,
    port: 8090
  }
});

export default config;
