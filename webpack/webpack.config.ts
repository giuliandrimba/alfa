import path from 'path';
import { Configuration as WebpackConfig } from "webpack";
import devConfig from "./development";
import prodConfig from "./production";

const rootDir = path.resolve(__dirname, '../');

const config = (_: any, args: WebpackConfig): WebpackConfig => {
  const commonConfig: WebpackConfig = {
    entry: {
      app: `${rootDir}/src/index.tsx`,
    },
    mode: args.mode,
    module: {
      rules: [
        {
          exclude: /node_modules/,
          test: /\.(ts|js)x?$/,
          use: "ts-loader",
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader',
          ],
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader',
          ],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            'file-loader',
          ],
        },
      ]
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
      alias: {
        Assets: path.resolve(rootDir, 'src/assets/'),
      }
    },
  }

  const additionalConfig = args.mode === "production" ? prodConfig(rootDir) : devConfig(rootDir);

  return { ...commonConfig, ...additionalConfig };
}

export default config;
