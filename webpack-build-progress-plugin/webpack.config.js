const Webpack = require('webpack')

const config = {
	mode: 'development',
	plugins: [
		new Webpack.ProgressPlugin()
	]
}

module.exports = config
