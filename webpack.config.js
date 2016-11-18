var path = require('path');
var webpack = require('webpack');
var STATIC = path.join(__dirname, 'src/main/resources/static');

module.exports = {
    entry: {
        page1: path.join(STATIC, 'js/page1.js'),
        page2: path.join(STATIC, 'js/page2.js'),
        page3: path.join(STATIC, 'js/page3.js')
    },
    output: {
        path: path.join(STATIC, 'js/dist'),
        filename: '[name].min.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query:{
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
            },
        }),
        new webpack.optimize.OccurenceOrderPlugin()
    ]
}