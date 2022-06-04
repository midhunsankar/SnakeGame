const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: ["./src/main.js"], // bundle's entry point
    output: {
        path: path.resolve(__dirname, 'dist'), // output directory
        filename: "[hash].js", // name of the generated bundle
        clean:true
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                  ],
              },
              {
                test: /test\.js$/,
                use: 'mocha-loader',
                exclude: /node_modules/,
              },
        ],
      },
    plugins : [
        new MiniCssExtractPlugin({
            filename: "[hash].css"
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            inject : "body"
        }),
 //       new CopyWebpackPlugin({
 //           patterns: [
 //               { from: './src/assets', to:"assets" },
 //           ]
 //       })
    ],
    externals: {
        // require("jquery") is external and available
        //  on the global var jQuery
        "jquery": "jQuery"
      }
};