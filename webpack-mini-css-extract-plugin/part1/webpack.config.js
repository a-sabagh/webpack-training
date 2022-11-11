const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const config = {
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.css$/,
				use : [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: "../"
						}
					},
					'css-loader',
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin()
	]
}

module.exports = config
