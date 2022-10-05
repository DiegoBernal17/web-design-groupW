const path = require("path");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  // APP ENTRY POINT
  entry: path.join(__dirname, "src", "index.jsx"),
  // OUTPUT DIRECTORY
  output: {
    path: path.join(__dirname, "dist"),
    filename: "main.bundle.js",
  },
  // EVIROMENT MODE
  mode: process.env.NODE_ENV || "development",
  // PATH RESOLVE
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    extensions: [".js", ".json", ".jsx"],
  },
  // DEV SERVER ENTRY POINT
  devServer: {
    static: {
      directory: path.resolve(__dirname, "./public"),
    },
    port: 3000,
    open: true,
  },
  plugins: [
    new miniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [{ from: "public" }],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            //loader: "style-loader",
            loader: miniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: () => [require("autoprefixer")],
              },
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        mimetype: "image/svg+xml",
        scheme: "data",
        type: "asset/resource",
        generator: {
          filename: "icons/[hash].svg",
        },
      },
    ],
  },
};
