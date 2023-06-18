import path from "path";

import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import type { Configuration as WebpackConfig } from "webpack";
import type { Configuration as WebpackDevServerConfig } from "webpack-dev-server";
import merge from "webpack-merge";

import commonConfig from "./webpack.common";

type Configuration = WebpackConfig & { devServer: WebpackDevServerConfig };

const devConfig: Configuration = {
  mode: "development",

  entry: path.resolve(__dirname, "src/main.tsx"),

  output: {
    publicPath: "/",
  },

  devServer: {
    compress: true,
    historyApiFallback: true,
    port: 3000,
    open: true,
    hot: true,
    liveReload: false,
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
            options: { modules: true },
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

  plugins: [new ReactRefreshWebpackPlugin()],
};

export default merge(commonConfig, devConfig);
