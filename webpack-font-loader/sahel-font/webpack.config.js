const config = {
	mode: "development",
	module: {
		rules: [
			{
				test: /\.(css)$/,
				use: ['style-loader','css-loader'],
			},
			{
				test: /\.(scss)$/,
				use: ['style-loader','css-loader','sass-loader'],
			},
			{
				test: /\.(woff|eot|ttf|svg)$/,
				use: 'file-loader'
			}
		]
	}
}

module.exports = config
