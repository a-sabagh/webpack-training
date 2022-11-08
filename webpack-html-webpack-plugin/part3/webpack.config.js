const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const config = {
	mode: 'development',
	entry: {
		index: './src/assets/js/index.js',
		about: './src/assets/js/about.js',
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname,'dist'),
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						exclude: ['node-modules'],
						presets: ['@babel/preset-env'],
					}
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'html index template title',
			filename: 'index.html',
			template: 'src/index.html',
			chunks: ['index'],
		}),
		new HtmlWebpackPlugin({
			title: 'html about template title',
			filename: 'about.html',
			template: 'src/about.html',
			chunks: ['about'],
		})
	]
}

module.exports = config
