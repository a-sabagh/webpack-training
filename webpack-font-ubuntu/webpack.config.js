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
				test: /\.(woff(2)?|ttf|eot|svg)$/,
				use: {
					loader: 'file-loader',
					options: {
						outputPath: 'fonts',
						name: '[name].[ext]'
					}
				}
			}
		]
	}
}

module.exports = config
