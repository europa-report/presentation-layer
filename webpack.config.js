const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public')
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            use: ['style-loader', 'css-loader'],
            test: /\.css/
        },
        {
            use: [{
                loader: MiniCssExtractPlugin.loader,
            }, 'css-loader','less-loader'],
            test: /\.less$/,
        } ,
        {
            test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
            use: 'url-loader',
        },
        {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
                {
                    loader:'file-loader',
                }
            ]
        },    
    ]
    },
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};