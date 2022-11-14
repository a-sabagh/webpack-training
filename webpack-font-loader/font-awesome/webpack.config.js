const path = require('path')

const config = {
	mode: "development",
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader','css-loader'],
			},
			{
				test: /\.scss$/,
				use: ['style-loader','css-loader','sass-loader'],
			},
			{
				test: /\.(ttf|eot|svg|gif|woff)$/,
				use: 'file-loader',
			}
		]
	}
}

module.exports = config
