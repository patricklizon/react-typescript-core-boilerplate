import path from "path";

import merge from "webpack-merge";
import { Configuration as WebpackConfig } from "webpack";
import { Configuration as WebpackDevServerConfig } from "webpack-dev-server";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

import commonConfig from "./webpack.common";

type Configuration = WebpackConfig & { devServer: WebpackDevServerConfig };

const devConfig: Configuration = {
  mode: "development",

  entry: path.resolve(__dirname, "src/index.tsx"),

  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].js",
  },

  watchOptions: {
    poll: true,
    ignored: ["/node_modules/"],
  },

  devServer: {
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

  plugins: [
    new ReactRefreshWebpackPlugin({
      library: "swc",
      overlay: {
        sockIntegration: "wds",
        sockProtocol: "ws",
      },
    }),
  ],
};

// eslint-disable-next-line import/no-default-export
export default merge(commonConfig, devConfig);
