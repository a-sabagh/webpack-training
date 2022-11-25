const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
	entry: {
		index: './src/index.js',
	},
	output: {
		filename: 'custom.js',
		path: path.resolve(__dirname,'dist')
	},
	plugins: [
		new CleanWebpackPlugin()
	]
}
