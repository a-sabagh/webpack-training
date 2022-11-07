const conf = {
	mode: "development",
	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						exclude: ['node_modules'],
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	}
}

module.exports = conf
