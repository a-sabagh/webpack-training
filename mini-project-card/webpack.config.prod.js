const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const config = {
	mode: "production",
	devtool: 'source-map',
	entry: {
		index: './src/index.js',
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname,'./build'),
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
				test: /\.s?css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					{
						loader: 'css-loader',
						options: {
							url: {},
						}
					},
					'sass-loader',
				]
			},
			{
				test: /\.(woff|eot|ttf|svg|jpg|png|gif)$/i,
				use: [
					 {
						loader: 'url-loader',
						options: {}
					 }
				]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: 'assets/css/[name].css',
		}),
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
