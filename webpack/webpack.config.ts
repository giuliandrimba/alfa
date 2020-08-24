import path from 'path';
import { Configuration as WebpackConfig } from "webpack";

const rootDir = path.resolve(__dirname, '../');

const config = (_: any, args: WebpackConfig): WebpackConfig => {
  const commonConfig: WebpackConfig = {
    entry: {
      app: `${rootDir}/src/ts/index.tsx`,
    },
    mode: args.mode,
    module: {
      rules: [
        {
          exclude: /node_modules/,
          test: /\.tsx?$/,
          use: "ts-loader",
        },
        {
          test: /\.(eot|svg|ttf|otf|woff|woff2)$/,
          use: "file-loader?name=[name].[ext]",
        }
      ]
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
  }

  return { ...commonConfig };
}

export default config;
