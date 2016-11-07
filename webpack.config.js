var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var NODE_MODULES = path.join(__dirname, 'node_modules');
var STATIC = path.join(__dirname, 'src/main/resources/static');
var VENDOR = path.join(STATIC, 'vendor');
var LIB = path.join(STATIC, 'js/lib');

module.exports = {
    entry: {
        app: path.join(STATIC, 'js/app.js'),
        lib: [
            path.join(VENDOR,'jquery.min.js'),
            path.join(VENDOR,'underscore-min.js'),
            path.join(VENDOR,'moment.min.js'),
            path.join(LIB,'lib1.js'),
            path.join(LIB,'lib2.js')
        ]
    },
    output: {
        path: path.join(STATIC, 'js/dist'),
        filename: '[name].bundle.js'
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: path.join(NODE_MODULES, 'jquery/dist/jquery.min.js'), to:VENDOR},
            { from: path.join(NODE_MODULES, 'underscore/underscore-min.js'), to:VENDOR},
            { from: path.join(NODE_MODULES, 'moment/min/moment.min.js'), to:VENDOR}
        ]),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
            },
        }),
        new webpack.optimize.OccurenceOrderPlugin()
    ]
}