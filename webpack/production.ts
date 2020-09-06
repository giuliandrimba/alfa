import CompressionWebpackPlugin from "compression-webpack-plugin";
import HTMLWebpackPlugin from "html-webpack-plugin";
import HTMLWebpackTagsPlugin from "html-webpack-tags-plugin";
import { join } from "path";
import { Configuration } from "webpack";

const config = (dirPath: string): Configuration => {
  return {
    devtool: "source-map",
    output: {
      filename: '[name].[contentHash].bundle.js'
    },
    plugins: [
      new HTMLWebpackPlugin({
        filename: "index.html",
        template: join(dirPath, "/src/index.html"),
        title: "Zero",
      }),
      new CompressionWebpackPlugin({
        algorithm: "gzip",
        minRatio: 0.8,
        test: /\.(js|html|css)$/,
        threshold: 10240, // Customize this to the amount you think is big enough to enable compression (in bytes)
      }),
    ],
  };
};

export default config;
