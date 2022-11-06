const conf = {
	mode: "development",
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ['style-loader','css-loader','sass-loader']
			}
		]
	}
}

module.exports = conf
