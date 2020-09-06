import HTMLWebpackPlugin from "html-webpack-plugin";
import { join, resolve } from "path";
import {
  HotModuleReplacementPlugin,
} from "webpack";
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { Configuration as DevServerConfig } from "webpack-dev-server";

const config = (dirPath: string): any => {
  return {
    devServer: ((): DevServerConfig => {
      return {
        contentBase: join(dirPath, "/dist"),
        hot: true,
        inline: true,
      };
    })(),
    devtool: "eval-source-map",
    output: {
      filename: '[name].bundle.js',
    },
    plugins: [
      new ForkTsCheckerWebpackPlugin({
        typescript: {
          diagnosticOptions: {
            semantic: true,
            syntactic: true,
          },
        },
      }),
      new HotModuleReplacementPlugin(),
      new HTMLWebpackPlugin({
        filename: "index.html",
        inject: true,
        template: join(dirPath, "/src/index.html"),
        title: "Webpack TypeScript",
      }),
    ]
  }
}

export default config;
