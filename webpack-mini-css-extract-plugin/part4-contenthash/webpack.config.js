const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = {
	mode: "development",
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [ MiniCssExtractPlugin.loader , 'css-loader' ],
			},
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css'
		}),
		new HtmlWebpackPlugin({
			minify: true,
			template: './src/index.html',
			title: 'Css contenthash',
		})
	]
}

module.exports = config
