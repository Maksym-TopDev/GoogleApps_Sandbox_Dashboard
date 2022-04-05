const path = require('path');

module.exports = (env) => {  
  console.log(env)
  const entry = `./public/projects/${env.type}/${env.name}/versions/${env.version}/main.js`;
  const filename = `./projects/${env.type}/${env.name}/${env.version}.bundle.js`;
  return {
    mode: "production",
    entry,
    output: {
      filename,
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
    // devServer: {
    //   static: path.join(__dirname, 'public'),
    //   hot: true,
    //   port: 9000
    // }
  }
}