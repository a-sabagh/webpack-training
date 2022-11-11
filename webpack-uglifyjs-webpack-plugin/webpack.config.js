const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')

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
			filename: 'test.html',
			template: './src/index.html',
		}),
		new MiniCssExtractPlugin(),
	],
	optimization: {
		minimizer: [
			new UglifyjsWebpackPlugin()
		]
	}
}

module.exports = config
