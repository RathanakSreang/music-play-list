module.exports = {
  entry: "./client.js",
  output: {
    filename: "public/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.(css|scss)$/,
        use: [{
                loader: "css-loader" // translates CSS into CommonJS
              },{
                loader: "sass-loader" // compiles Sass to CSS
              }]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|server.js)/,
        loader: 'babel-loader'
      }
    ]
  }
}