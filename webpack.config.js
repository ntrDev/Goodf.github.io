let webpack = require('webpack');
let path = require("path");
let MiniCssExtractPlugin = require("mini-css-extract-plugin");
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'main.js'
    },
    devServer:{
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.js$/, 
                loader: 'babel-loader'
            },

            {
                test: /\.css$/,
                use: [
                    {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                            // you can specify a publicPath here
                            // by default it use publicPath in webpackOptions.output
                            publicPath: '../'
                            }
                    },
                        "css-loader"
                ]
            },

            {
                test: /\.html$/,
                use: [ {
                    loader: 'html-loader',
                    options: {
                        minimize: true
                    }
                }]
            },

            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                        {   
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                outputPath: 'img/',
                                publicPath: 'img/'
                            }
                        },
                ]
            },

            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                    loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "[name].css",
        chunkFilename: "[id].css"
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ]
    
    
}