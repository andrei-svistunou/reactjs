import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config = {
  context: path.resolve(__dirname, 'src'),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: true
    }),
  ]
};

export default config;
