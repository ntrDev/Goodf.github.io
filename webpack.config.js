let path = require("path");
let ExtractTextPlugin = require("extract-text-webpack-plugin");
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
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                // If you are having trouble with urls not resolving add this setting.
                                // See https://github.com/webpack-contrib/css-loader#url
                                url: false,
                                minimize: true,
                            }
                        }
                        
                    ]
                })
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
                    use: ['file-loader']
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("css/main.css"),
       
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
    
    
}