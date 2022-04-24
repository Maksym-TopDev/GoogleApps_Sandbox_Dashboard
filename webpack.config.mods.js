module.exports = {
  mode: "production",
  entry: {
    AESdecrypt: "./public/libs/src/modules/AESdecrypt.js",
    throttleAndDebounce: "./public/libs/src/modules/throttleAndDebounce.js",
  },
  output: {
    filename: "modules/[name].bundle.js",
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
  resolve: {
    fallback: {
      "fs": false,
      "path": false,
      "constants": false,
      "assert": false,
      "stream": false,
      "util": false,
    },
  }
}