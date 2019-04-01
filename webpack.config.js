const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpackResolve = require('./webpack.resolve');


module.exports = (env) => {
    const config = {
        packageName: env.p,
        production: env.production,
    };
    const module = webpackResolve(config);
    return {
        mode: config.production ? 'production' : 'development',
        entry: module.entry,
        output: module.output,
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    options: {
                        rootMode: 'upward',
                    },
                },
            ],
        },
        optimization:
            config.production ? {
                minimizer: [
                    new UglifyJsPlugin({
                        cache: true,
                        parallel: true,
                    }),
                ],
            } : {
                // dev optimisation
            },
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: config.production ? 'production' : 'development',
                },
            }),
        ],
    };
};
