let path = require('path');
let src = path.join(__dirname, '/client');
let dist = path.join(__dirname, '/public/dist');

module.exports = {
  entry: `${src}/App.jsx`,
  output: {
    filename: 'bundle.js',
    path: dist
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react']
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  }
}