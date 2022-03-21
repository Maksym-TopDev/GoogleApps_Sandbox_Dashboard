const path = require('path');

module.exports ={
  mode: "production",
  entry: {
    "Mystic8/v3": "./public/projects/games/mystic8/versions/v3/main.js",
    "Mystic8/v2": "./public/projects/games/mystic8/versions/v2/main.js",
    "Rivalry/v3": "./public/projects/games/rivalry/versions/v3/main.js",
    "Rivalry/v2": "./public/projects/games/rivalry/versions/v2/main.js",
    modules: "./public/libs/src/modules.js"
  },
  output: {
    filename: "[name].bundle.js",
    publicPath: '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  // devServer: {
  //   static: path.join(__dirname, 'public'),
  //   hot: true,
  //   port: 9000
  // }
}