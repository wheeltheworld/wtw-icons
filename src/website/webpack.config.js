const path = require('path');
const TerserWebpackPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: './src/website/index.tsx',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, '../../docs'),
        filename: 'app.js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserWebpackPlugin()],
    },
};
