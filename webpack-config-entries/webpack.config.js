module.exports = {
	entry: {
		index: './src/index.js',
		about: './src/about.js',
	},
	output: {
		filename: '[name].js',
		path: __dirname + '/app'
	}
}
