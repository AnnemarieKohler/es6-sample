module.exports = {
  context: __dirname + "/app",
  entry: "./entry",
  output: {
           path: __dirname + "/dist",
           filename: "bundle.js"
  },
  loaders: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }
  ]
};
