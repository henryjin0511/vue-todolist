const path = require('path');
const webpack = require('webpack');
const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH,'./src/main.js');
const BUILD_PATH = path.resolve(ROOT_PATH,'./dist');
module.exports = {
	entry: APP_PATH,
	output: {
		path: BUILD_PATH,
		publicPath: '/dist/',
		filename: '[name].bundle.js'
	},
	module: {
		rules: [
			//解析.vue文件
			{
				test:/\.vue$/,
				loader:'vue-loader',
				options: {
					loaders: {
						scss: 'vue-style-loader!css-loader!sass-loader'
					},
					postcss: [require('autoprefixer')({ browsers: ['last 10 Chrome versions', 'last 5 Firefox versions', 'Safari >= 6', 'ie > 8'] })]
				}
			},
			//转化ES6语法
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015']
				}
			},
			//scss文件支持
			{
				test:/\.scss$/,
				use:[ 'style-loader', 'css-loader','sass-loader' ]
			},
			//图片支持
			{
				test: /\.(png|jpg)$/,
				loader: 'url-loader?limit=40000'
			}
		]
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.common.js'
		}
	},
	devServer: {
		historyApiFallback: true,
		noInfo: true
	},
	plugins:[
		new webpack.optimize.UglifyJsPlugin({
			minimize:true,
			compress:{
				warnings:false
			}
		})
	],
	devtool: 'eval-source-map'
}
if (process.env.NODE_ENV === 'production') {
	module.exports.devtool = '#source-map'
	// http://vue-loader.vuejs.org/en/workflow/production.html
	module.exports.plugins = (module.exports.plugins || []).concat([
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: true,
			compress: {
				warnings: false
			}
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: true
		})
	])
}