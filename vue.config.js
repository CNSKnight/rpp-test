const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    baseUrl: '/Details/',
    configureWebpack: {
        entry: {
            detailsPlugin: ['./src/details-plugin.js'],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './public/index-plugin.html',
                title: 'Webpack  Details Plugin App',
                inject: 'body',
                filename: 'index-plugin.html',
                excludeChunks: ['app']
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'common'
            })
        ],
        output: {
            chunkFilename: '[name].bundle.js',
        }
    }
}