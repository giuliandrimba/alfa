import CompressionWebpackPlugin from "compression-webpack-plugin";
import HTMLWebpackPlugin from "html-webpack-plugin";
import { join } from "path";
import { Configuration } from "webpack";
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';


const config = (dirPath: string): Configuration => {
  return {
    output: {
      filename: '[name].[contentHash].bundle.js'
    },
    optimization: {
      moduleIds: 'hashed',
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
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
