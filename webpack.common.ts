import path from "path";

import HtmlWebpackPlugin from "html-webpack-plugin";
import { Configuration } from "webpack";

const commonConfig: Configuration = {
  entry: path.resolve(__dirname, "src/index.tsx"),

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },

  module: {
    rules: [
      {
        test: /\.(mjs|js|ts|tsx)$/,
        exclude: /(node_modules)/,
        use: { loader: "swc-loader" },
      },
      {
        test: /\.svg?$/,
        use: { loader: "raw-loader" },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      cache: true,
      filename: "index.html",
      title: "hello universe",
      template: path.resolve(__dirname, "src/index.html"),
      publicPath: "/",
    }),
  ],
};

// eslint-disable-next-line import/no-default-export
export default commonConfig;
