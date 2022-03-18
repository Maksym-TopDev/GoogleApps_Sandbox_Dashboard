const path = require('path');

module.exports ={
  mode: "production",
  entry: {
    mystic8_v3: "./public/projects/games/mystic8/versions/v3/main.js",
    mystic8_v2: "./public/projects/games/mystic8/versions/v2/main.js",
    rivalry_v3: "./public/projects/games/rivalry/versions/v3/main.js",
    rivalry_v2: "./public/projects/games/rivalry/versions/v2/main.js",
    utils: "./public/libs/main/utils.js"
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