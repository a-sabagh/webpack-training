const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const config = {
	mode: "development",
	entry: {
		index: './src/index.js',
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname,'./build')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ["@babel/preset-env"]
						}
					}
				]
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					'css-loader'
				]
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					'css-loader',
					'sass-loader',
				]
			},
			{
				test: /\.(woff|eot|ttf|svg|jpg|png|gif)$/i,
				use: 'file-loader',
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/index.html',
		}),
		new HtmlWebpackPlugin({
			filename: 'about.html',
			template: './src/about.html',
		})
	]
}

module.exports = config