const config = {
	mode:"development",
	module: {
		rules: [
			{
				test: /\.(jpe?g|png|svg)$/,
				use: 'file-loader'
			}
		]
	}
}

module.exports = config
