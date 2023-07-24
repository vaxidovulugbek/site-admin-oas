const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    mode: "development",
    entry: "./src/index.js",
    devtool: "source-map",
    output: {
        path: path.join(__dirname, "/build"),
        filename: "index.js",
    },
    devtool: "inline-source-map",
    devServer: {
        static: "./build",
    },
    module: {
        rules: [
            {
                test: /\.js\.jsx\.ts\tsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
        ],
    },
    resolve: {
        extensions: [".jsx", ".ts", ".tsx", ".js"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
        }),
    ],
};
