
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
import { Configuration } from "webpack";

import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
const path = require('path');
const webpackConfig = (): Configuration => ({
    entry: ["./src/index.tsx", 'react-hot-loader/patch'],
    ...(process.env.production || !process.env.development
        ? {}
        : { devtool: "eval-source-map" }),

    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })],
    },
    output: {
        path: path.join(__dirname, "/build"),
        filename: "build.js",
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                options: {
                    transpileOnly: true,
                },
                exclude: /build/,
            },
            {
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
        ],
    },
});

export default webpackConfig;
