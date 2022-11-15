const config = {
	mode: "development",
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader','css-loader'],
			},
			{
				test: /\.(woff2|eot|ttf|svg)$/,
				use: 'url-loader',
			}
		]
	}
}

module.exports = config
