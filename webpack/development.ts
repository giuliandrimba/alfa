import HTMLWebpackPlugin from "html-webpack-plugin";
import HTMLWebpackTagsPlugin from "html-webpack-tags-plugin";
import { join, resolve } from "path";
import {
  Configuration,
  DevtoolModuleFilenameTemplateInfo,
  DllReferencePlugin,
  HotModuleReplacementPlugin,
} from "webpack";
import { Configuration as DevServerConfig } from "webpack-dev-server";

const config = (dirPath: string): any => {
  return {
    devServer: ((): DevServerConfig => {
      return {
        contentBase: join(dirPath, "/dist"),
        host: "0.0.0.0",
        hot: true,
        inline: true,
        publicPath: "/",
      };
    })(),
    devtool: "eval-source-map",
    output: {
      filename: '[name].bundle.js',
      path: `${dirPath}/dist`
    },
    plugins: [
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
