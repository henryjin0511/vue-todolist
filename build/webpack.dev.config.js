const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./base.js');

module.exports = function (env) {
	return webpackMerge(commonConfig(),{
		devtool: 'eval-source-map',
		devServer: {
			historyApiFallback: true,
			noInfo: false,
			compress: true,
			hot: true,
			stats: 'minimal',
			publicPath: '/dist/'
		},
		plugins: [
			new webpack.HotModuleReplacementPlugin()
		]
	})
}