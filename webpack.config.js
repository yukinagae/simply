/* global __dirname */

var path = require('path');

var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var dir_js = path.resolve(__dirname, 'src/js');
var dir_html = path.resolve(__dirname, 'src');
var dir_dist = path.resolve(__dirname, 'dist');

module.exports = {
    entry: path.resolve(dir_js, 'app.jsx'),
    output: {
        path: dir_dist,
        filename: 'app.js'
    },
    devServer: {
        contentBase: dir_dist,
    },
    module: {
        loaders: [
            {
                loader: 'react-hot',
                test: dir_js,
            },
            {
                loader: 'babel-loader',
                test: dir_js,
                query: {
                    presets: ['es2015', 'react'],
                },
            },
            {
                loader: "style-loader!css-loader",
                test: /\.css$/,
            }
        ]
    },
    plugins: [
        // Simply copies the files over
        new CopyWebpackPlugin([
            { from: dir_html } // to: output.path
        ]),
        // Avoid publishing files when compilation fails
        new webpack.NoErrorsPlugin()
    ],
    stats: {
        // Nice colored output
        colors: true
    },
    // Create Sourcemaps for the bundle
    devtool: 'source-map',
};
