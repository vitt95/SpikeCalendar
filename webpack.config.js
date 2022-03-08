const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output : {
        filename: "app.js",
        path : path.resolve(__dirname, "dist"),
        publicPath: "./",
        assetModuleFilename: 'images/[name][ext][query]'
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html',
    })],
    module : {
        rules : [
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.m?js$/,
                exclude : /(node_modules|bower_components)/,
                use : {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}