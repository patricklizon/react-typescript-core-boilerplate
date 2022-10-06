import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import TerserPlugin from "terser-webpack-plugin";
import type { Configuration } from "webpack";
import merge from "webpack-merge";

import commonConfig from "./webpack.common";

const isPerfEnv = process.env.NODE_ENV === "performance";

const prodConfig: Configuration = {
  mode: "production",

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: isPerfEnv
          ? {
              keep_classnames: true,
              keep_fnames: true,
            }
          : {},
      }),
      new CssMinimizerPlugin(),
    ],
    nodeEnv: process.env.NODE_ENV,
    runtimeChunk: true,
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },

  resolve: {
    alias: isPerfEnv
      ? {
          "react-dom$": "react-dom/profiling",
          "scheduler/tracing": "scheduler/tracing-profiling",
        }
      : {},
  },

  module: {
    rules: [
      {
        test: /\.module\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                mode: "local",
                localIdentName: isPerfEnv
                  ? "[name]__[local]--[hash:base64:5]"
                  : "[hash:base64]",
              },
            },
          },
        ],
      },
      {
        test: {
          and: [/\.css$/],
          not: [/\.module\.css$/],
        },
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },

  plugins: [new MiniCssExtractPlugin()],
};

export default merge(commonConfig, prodConfig);
