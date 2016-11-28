const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const path = require('path');
const buildConfig = require('./webpack.build.config.js');

const RESOURCES = path.join(__dirname, 'src/main/resources/');
const TEMPLATES = path.join(RESOURCES, 'templates');
const JS = path.join(RESOURCES, 'static/js');

const target = process.env.npm_lifecycle_event;

const common = {
    entry: {
        vendor : [
            'jquery',
            'lodash',
            'moment',
            path.join(JS, 'lib/lib1.js'),
            path.join(JS, 'lib/lib2.js')
        ],
        page1: path.join(JS, 'page1.js'),
        page2: path.join(JS, 'page2.js'),
        page3: path.join(JS, 'page3.js')
    },
    output: {
        path: path.join(JS, 'dist'),
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query:{
                    presets: ['es2015'],
                    cacheDirectory: true
                }
            }
        ]
    },
    plugins: [
        new CommonsChunkPlugin({
            name: "vendor",
            filename: "lib/lib.js",
            minChunks: Infinity,
        }),
        new HtmlWebpackPlugin({
            filename: path.join(TEMPLATES,'footer/page1_footer.ftl'),
            chunks: ['vendor', 'page1']
        }),
        new HtmlWebpackPlugin({
            filename: path.join(TEMPLATES,'footer/page2_footer.ftl'),
            chunks: ['vendor', 'page2']
        }),
        new HtmlWebpackPlugin({
            filename: path.join(TEMPLATES,'footer/page3_footer.ftl'),
            chunks: ['vendor', 'page3']
        }),
        new webpack.NoErrorsPlugin()
    ]
};

var config;

if(target === 'build') {
    config = webpackMerge(common, buildConfig);
}else{
    config = common;
}

module.exports = config;