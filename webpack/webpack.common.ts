import path from 'path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HTMLWebpackPlugin from "html-webpack-plugin";

export const rootDir = path.resolve(__dirname, '../');

const config = {
  entry: {
    app: `${rootDir}/src/index.tsx`,
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        include: path.resolve(rootDir, 'src'),
        test: /\.(ts|js)x?$/,
        use: "babel-loader",
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
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
      },
    }),
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      filename: "index.html",
      inject: true,
      template: path.join(rootDir, "/src/index.html"),
    }),
  ]
}

export default config;
