const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
	mode: "development",
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader,'css-loader']
			},
			{
				test: /\.scss$/,
				use: [MiniCssExtractPlugin.loader,'css-loader','sass-loader']
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'html/test.html',
			template: './src/index.html',
		}),
		new MiniCssExtractPlugin({
			filename: 'assets/css/master.css',
		}),
	]
}

module.exports = config
