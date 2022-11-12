const config = {
	mode: "development",
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
					}
				]
			},
			{
				test: /\.(woff|eot|ttf)$/,
				use: 'url-loader',
			}
		]
	}
}

module.exports = config
