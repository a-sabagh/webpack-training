const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

const config = {
	mode: "development",
	entry: {
		index: './src/index.js'
	},
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname,'dist')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader,'css-loader']
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			favicon: './src/favicon.png',
			title: 'Cash Busting',
		}),
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css'
		}),
		new CleanWebpackPlugin(),
	]
}

module.exports = config
