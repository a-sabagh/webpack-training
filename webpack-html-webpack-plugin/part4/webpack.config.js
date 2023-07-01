const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = {
	mode: 'development',
	entry: {
		index: './src/assets/js/index.js',
		about: './src/assets/js/about.js',
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname,'dist')
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: ['index'],
			filename: 'index.html',
			chunks: 'index',
			hash: true,
		}),
		new HtmlWebpackPlugin({
			title: ['about'],
			filename: 'about.html',
			chunks: 'about',
			hash: true,
		})
	]
}

module.exports = config
