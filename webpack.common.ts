import path from "path";

import { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

const commonConfig: Configuration = {
  entry: path.resolve(__dirname, "src/index.tsx"),

  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].js",
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },

  module: {
    rules: [
      {
        test: /\.svg?$/,
        use: { loader: "raw-loader" },
      },
      {
        test: /\.(mjs|js|ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          // `.swcrc` can be used to configure swc
          loader: "swc-loader",
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      cache: true,
      title: "hello universe",
      template: path.resolve(__dirname, "src/index.html"),
      publicPath: "/",
    }),
  ],
};

// eslint-disable-next-line import/no-default-export
export default commonConfig;
