module.exports = {
  entry: [
    './src/pages/ionic-datepicker/ionic-datepicker.js',
    './src/pages/ionic-datepicker/ionic-datepicker.html',
    './src/pages/ionic-datepicker/ionic-datepicker.scss'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
  },
  module: {
        loaders: [
          { test: /\.css$/, loader: "style!css" },
          { test: /\.html$/, loader: "html!html" }
        ]
    }
};