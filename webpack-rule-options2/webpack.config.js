const config = {
	mode: "development",
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader'
					}
				]

			},
			{
				test: /\.scss$/,
				use:[
					'style-loader',
					'css-loader',
					{
						loader: 'sass-loader'
					}
				]
			},
			{
				test: /\.(jpe?g|png)$/,
				use: {
					loader: 'file-loader',
					options: {
						outputPath: 'images',
						name: '[name].[ext]'
					}
				}
			}
		]
	}
}

module.exports = config
