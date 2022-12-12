const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const config = {
	mode: "development",
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader,'css-loader']
			},
		]
	},
	optimization: {
		minimize: true,
		minimizer: [
			new CssMinimizerPlugin()
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			title: 'mini css optimization plugin'
		}),
		new MiniCssExtractPlugin()
	]
}

module.exports = config
