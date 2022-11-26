const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = {
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader','css-loader']
			},
			{
				test: /\.js$/i,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env'],
						}
					}
				]
			},
			{
				test: /\.(png|jpg)/,
				use: 'file-loader',
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			title: 'Webpack Dev Server',
			favicon: './src/favicon.png'
		})
	]
}

module.exports = config
