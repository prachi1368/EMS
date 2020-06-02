const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        title: 'EMS',
        title: 'Caching',
    }),
    ],
    output: {
        filename: 'bundle.js',
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
    }
};
