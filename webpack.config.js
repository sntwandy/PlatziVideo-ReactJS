const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDev = (process.env.ENV === 'development');
const entry = ['./src/frontend/index.js'];

if (isDev) {
    entry.push('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&reload=true');
};

module.exports = {
    entry,
    mode: process.env.ENV,
    output: {
        path: path.resolve(__dirname, 'src/server/public'),
        filename: 'assets/app.js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.(s*)css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(png|gif|jpg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/[hash].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        isDev ? new webpack.HotModuleReplacementPlugin() : () => {},
        /*new HtmlWebpackPlugin( {
            template: './public/index.html',
            filename: './index.html',
        } ),*/
        new MiniCssExtractPlugin( {
            filename: 'assets/app.css',
        } ),
    ]
};