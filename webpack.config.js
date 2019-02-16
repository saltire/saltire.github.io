const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');



module.exports = {
  mode: 'production',
  entry: {
    linkdump: path.resolve(__dirname, 'js/linkdump/index.jsx'),
  },
  output: {
    path: path.resolve(__dirname, 'static/js'),
    filename: '[name].js',
    library: '[name]',
    libraryExport: 'default',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  optimization: {
    minimizer: [new TerserPlugin()],
  },
};
