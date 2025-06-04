const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin   = require('copy-webpack-plugin');
const path = require('path');

module.exports = (env = {}) => {
  const publicPath = env.publicPath || '/';

  return {
    entry: './index.js',
    mode: 'development',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index_bundle.js',
      publicPath: publicPath,
    },
    target: 'web',
    devServer: {
      historyApiFallback: true,
      port: '5000',
      static: {
        directory: path.join(__dirname, 'public')
      },
      open: true,
      hot: true,
      liveReload: true,
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'public', 'index.html'),
      }),

      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'public'),
            to: path.resolve(__dirname, 'dist'),
            globOptions: {
              ignore: ['**/index.html'],
            },
          },
        ],
      }),
    ],
  };
};
