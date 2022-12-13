const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const path = require('path')
const config = {
	entry: {
		index: './src/index.js',
	},
	output: {
		filename: '[name][contenthash].js',
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
			filename: 'assets/css/[name][contenthash].css',
		}),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/index.html',
		}),
		new HtmlWebpackPlugin({
			filename: 'about.html',
			template: './src/about.html',
		})
	],
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin(),
			new CssMinimizerPlugin(),
		]
	}
}

module.exports = config
