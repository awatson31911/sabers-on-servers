const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: './client/js/main.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: ['babel-loader']

      },
      {
        test: /\.css?|\.scss$/,
        loader: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader'
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx']
  }
};
