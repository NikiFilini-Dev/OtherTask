const rules = require("./webpack.rules")
const path = require("path")
const webpack = require("webpack")
const Dotenv = require("dotenv-webpack")

rules.push({
  test: /\.css$/,
  use: [{ loader: "style-loader" }, { loader: "css-loader" }],
})

rules.push({
  test: /\.(otf|eot|ttf|woff|woff2)$/,
  loader: "file-loader",
  query: {
    outputPath: "fonts/",
    publicPath: "../fonts/", // That's the important part
  },
})

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
  },
  resolve: {
    extensions: [".js", ".jsx", ".styl", ".ts", ".tsx"],
    modules: [path.resolve(__dirname, "src"), "node_modules"],
  },
  plugins: [
    new Dotenv(),
    new webpack.DefinePlugin({
      IS_WEB: false,
      API_URL: JSON.stringify(process.env.API_URL),
    }),
    new webpack.ProvidePlugin({
      logger: [path.resolve(__dirname, "src", "tools", "logger.ts"), "logger"],
      createLogger: [
        path.resolve(__dirname, "src", "tools", "logger.ts"),
        "createLogger",
      ],
    }),
  ],
}
