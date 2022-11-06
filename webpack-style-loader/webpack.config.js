const path = require('path')

const configuration = {
	entry: './src/index.js',
	output: {
		filename: 'build.js',
		path: path.resolve(__dirname,'build'),
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader','css-loader']
			}
		]
	},
	mode: "development"
}

module.exports = configuration
