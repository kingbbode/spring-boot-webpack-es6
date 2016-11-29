const webpack = require('webpack');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const JS = path.join(__dirname, 'src/main/resources/static/js');

module.exports = {
    output: {
        filename: '[name]-[chunkhash].js'
    },
    plugins: [
        new CommonsChunkPlugin({
            name: 'vendor',
            filename: 'lib/lib-[hash].js',
            minChunks: Infinity,
        }),
        new CleanWebpackPlugin([path.join(JS, 'dist/*')], {
            verbose: true,
            dry: false
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ]
};