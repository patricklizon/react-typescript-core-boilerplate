import merge from "webpack-merge";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";
import { Configuration } from "webpack";

import commonConfig from "./webpack.common";

const prodConfig: Configuration = {
  mode: "production",

  optimization: {
    minimize: true,

    nodeEnv: process.env.NODE_ENV,

    runtimeChunk: true,

    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],

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
              modules: true,
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

// eslint-disable-next-line import/no-default-export
export default merge(commonConfig, prodConfig);
