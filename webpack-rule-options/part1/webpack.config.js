const conf = {
	mode: "development",
	module: {
		rules: [
			{
				test: /\.(jpe?g|png)$/,
				use: {
					loader: 'file-loader',
					options: {
						outputPath: 'images',
						name: '[name].[ext]',
					}
				}
			}
		]
	}
}

module.exports = conf
