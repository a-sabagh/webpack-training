const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const glob = require('glob')

const entries = new Object 
glob.sync('./src/*.js').map( (file) => {
	entries[path.parse(file).name] = file
})

const plugins = []
glob.sync('./src/*.html').map( (file) => {
	let key = path.parse(file).name
	let value = file
	plugins.push(
		new HtmlWebpackPlugin({
			filename: `${key}.html`,
			template: file,
			title: key,
			chunks: [key]
		})
	)
})

const config = {
	mode: 'development',
	entry: entries,
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname,'dist')
	},
	plugins: plugins
}

module.exports = config
