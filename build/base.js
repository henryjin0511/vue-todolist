const path = require('path');
module.exports = function() {
	return {
		entry: {
			'main': path.resolve(__dirname,'../src/main.js')
		},
		output: {
			path: path.resolve(__dirname, '../dist/'),
			filename: '[name].bundle.js',
			publicPath: '/dist/',
			sourceMapFilename: '[name].map'
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
						postcss: [
							require('autoprefixer')({
								browsers: [
									'last 10 Chrome versions',
									'last 5 Firefox versions',
									'Safari >= 6',
									'ie > 8'
								]})
						]
					}
				},
				//转化ES6语法
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: [
						{
							loader: "babel-loader",
							options: {
								presets: [
									['es2015',{"modules":false}]
								]
							}
						}
					]
				},
				//scss文件支持
				{
					test:/\.scss$/,
					use:[
						{
							loader: 'style-loader'
						},
						{
							loader: 'css-loader'
						},
						{
							loader: 'sass-loader'
						}
					]
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
	};
}