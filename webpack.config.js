const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");


module.exports = function ( env ) {
	const config = {
		packageName: env.p,
		production: env.production,
	};
	const module = require('./webpack.resolve')(config);
	return {
		mode: config.production ? 'production' : 'development',
		entry: module.entry,
		output: module.output,
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					loader: "babel-loader"
				}
			]
		},
		optimization:
			config.production ?
				{
					minimizer: [
						new UglifyJsPlugin({
							cache: true,
							parallel: true,
							sourceMap: true // set to true if you want JS source maps
						}),
					]
				} :
				{
					//	dev optimisation
				},
		plugins: [
			new webpack.DefinePlugin({
				'process.env': {
					NODE_ENV: config.production ? 'production' : 'development'
				}
			}),
		],
		// env.production ? [
		// 	new webpack.DefinePlugin({
		// 		'process.env': {
		// 			NODE_ENV: env.production ? 'production' : 'development'
		// 		}
		// 	}),
		// 	new MiniCssExtractPlugin({
		// 		filename: `css/${env.name}.bundle.css`
		// 	}),
		// 	new OptimizeCssAssetsPlugin({
		// 		assetNameRegExp: /\.optimize\.css$/g,
		// 		cssProcessor: require('cssnano'),
		// 		cssProcessorPluginOptions: {
		// 			preset: ['default', {discardComments: {removeAll: true}}],
		// 		},
		// 		canPrint: true
		// 	}),
		// 	new UglifyJsPlugin({
		// 		parallel: true
		// 	}),
		// ] : [
		// 	new MiniCssExtractPlugin({
		// 		filename: `css/${env.name}.bundle.css`
		// 	}),
		// ]
	}
};