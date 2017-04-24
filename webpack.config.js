var path = require('path');

module.exports = {
  entry: "./app/APP.js",
  output: {
    path: path.resolve(__dirname, "public/"),
    filename: "bundle.js",
  },
  module: {
    loaders: [
      {
        test: /\.(css|scss)$/,
        loaders: [
          'style-loader',
          'css-loader?importLoader=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'sass-loader',
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|server.js)/,
        loader: 'babel-loader'
      },
      // Image URL config. Generate data URI's for images smaller than 10,000 bytes
      {
        test: /\.(png|gif|jpe?g|svg)$/i,
        loader: 'url-loader?limit=10000&name=/images/[name].[ext]?[hash]',
      },

      // // Image file config. Generate hashed file names to make them easy to cache.
      // {
      //   test: /\.(png|gif|jpe?g|svg)$/i,
      //   loader: 'file-loader?hash=sha512&digest=hex&name=/images/[name].[ext]'
      // },

      // Inline font files smaller than 10000 bytes
      { 
        test: /\.(woff2?|ttf|eot|svg)$/,
        loader: 'url-loader?limit=10000&name=/fonts/[name].[ext]?[hash]',
      },
    ]
  }
}
