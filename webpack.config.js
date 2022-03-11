const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "js/app.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "./",
    },
    externals :[
        nodeExternals()
    ],
    resolve: {
        fallback: {
            "crypto": require.resolve("crypto-browserify"),
            "path" : require.resolve("path-browserify"),
            "zlib" : false,     
            "stream": require.resolve("stream-browserify"),
            "buffer": false,
            "https": false,
            "http": false,
            "url": false,
            "vm": false,
            "querystring": require.resolve("querystring-es3"),
            "fs": require.resolve("browserify-fs"),
            "os": require.resolve("os-browserify"),
            "assert": false,
            "constants": false,
            "worker_threads": false,
            "child_process": false,
            "@swc/core": false,
            "esbuild": false,
            "uglify-js": false,
            "inspector": false,
        }
    },
    module: {
        rules : [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ["@babel/preset-env"],
                  },
                },
              },
        ]
    }
}