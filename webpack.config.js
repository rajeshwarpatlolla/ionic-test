module.exports = {
  entry: './src/pages/ionic-datepicker',
  output: {
    path: 'build',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        loader: 'babel',
        include: __dirname + './src/pages/ionic-datepicker',
      },
      {
        test: /\.html/,
        loaders: ['html'],
        include: __dirname + './src/pages/ionic-datepicker'
      },
      {
        test: /\.css/,
        loaders: ['style', 'css'],
        include: __dirname + './src/pages/ionic-datepicker'
      }
    ],
  }
};