const webpack = require("webpack")
const rules = require("./webpack.rules")
const path = require("path")
const Dotenv = require("dotenv-webpack")
const LodashModuleReplacementPlugin = require("lodash-webpack-plugin")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")

rules.push({
  test: /\.css$/,
  use: [{ loader: "style-loader" }, { loader: "css-loader" }],
})

rules.push({
  test: /\.(otf|eot|ttf|woff|woff2)$/,
  loader: "file-loader",
  query: {
    outputPath: "fonts/",
    publicPath: "/static/fonts/", // That's the important part
  },
})

module.exports = {
  entry: {
    main: path.resolve(__dirname, "src", "renderer.tsx"),
    sentry: path.resolve(__dirname, "src", "sentry-browser.js"),
  },
  output: {
    path: path.resolve(__dirname, "web_dist"),
    publicPath: "/static/",
  },
  // Put your normal webpack config below here
  module: {
    rules,
  },
  resolve: {
    extensions: [".js", ".jsx", ".styl", ".ts", ".tsx"],
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    alias: {
      lodash: "lodash-es",
      electron: path.resolve(__dirname, "web", "mocks", "electron.js"),
      "tools/jsonStorage": path.resolve(
        __dirname,
        "web",
        "mocks",
        "jsonStorage.js",
      ),
    },
  },
  node: {
    fs: "empty",
  },
  plugins: [
    new Dotenv(),
    new webpack.DefinePlugin({
      IS_WEB: true,
      API_URL: JSON.stringify(process.env.API_URL),
    }),
    new webpack.ProvidePlugin({
      logger: [path.resolve(__dirname, "src", "tools", "logger.ts"), "logger"],
      createLogger: [
        path.resolve(__dirname, "src", "tools", "logger.ts"),
        "createLogger",
      ],
    }),
    new LodashModuleReplacementPlugin(),
    // new BundleAnalyzerPlugin(),
  ],
  devtool: "eval-source-map",
  optimization: {
    usedExports: true,
    minimizer: [new UglifyJsPlugin()],
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "initial",
        },
      },
    },
  },
}
