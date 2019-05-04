const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
    mode: "development",
    devtool: 'cheap-module-eval-source-map',
    devServer:{
        contentBase: './dist',
        port: 3000
    },
    entry: {
        main: './src/index.js'
    },
    module: {
        rules: [
            { 
                test: /\.(jpg|png|gif|ico)$/, 
                use: {
                  loader: 'file-loader',
                  options:{
                    name: '[name].[ext]', //打包后的文件名
                    outputPath: 'images/', //打包后文件的存储路径
                  }
                }       
            },
            { 
                test: /\.css$/, 
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    'postcss-loader'
                ]  //解析顺序：从下到上，从右到左   
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                loader: 'babel-loader',
                }
            }
        ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({template: 'src/index.html',favicon: 'src/favicon.ico'}),
        new CleanWebpackPlugin()
    ]
};
  
  module.exports = config;
  