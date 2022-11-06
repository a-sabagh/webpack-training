const path = require('path')
const configuration = {
	entry: './src/index.js',
	output: {
		filename: 'build.js',
		path: path.resolve(__dirname,'build'),
	},
	mode: "development"
}

module.exports = configuration
