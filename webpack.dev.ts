import path from "path";

import merge from "webpack-merge";
import { Configuration as WebpackConfig } from "webpack";
import { Configuration as WebpackDevServerConfig } from "webpack-dev-server";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";

import commonConfig from "./webpack.common";

type Configuration = WebpackConfig & WebpackDevServerConfig;

const devConfig: Configuration = {
  entry: path.resolve(__dirname, "src/index.tsx"),
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].js",
  },

  target: "web",

  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    injectClient: false,
    historyApiFallback: true,
    port: 3000,
    hot: true,
    open: true,
  },

  devtool: "cheap-module-source-map",

  module: {
    rules: [
      {
        test: /\.module\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
          "postcss-loader",
        ],
      },
      {
        test: {
          and: [/\.css$/],
          not: [/\.module\.css$/],
        },
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },

  plugins: [new ForkTsCheckerWebpackPlugin()],
};

// eslint-disable-next-line import/no-default-export
export default merge(commonConfig, devConfig);
