const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = {
	mode: "development",
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Html Webpack Plugin',
			filename: 'main.html',
			template: './src/index.html',
		})
	]
}

module.exports = config
