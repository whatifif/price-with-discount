var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: ['./app.js'],
	output: {
		path: __dirname + '/build',
		filename: 'bundle.js'
	},
	module: {
         loaders: [{
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader'
         }]
     },
	plugins: [
        new CopyWebpackPlugin([
            { from: 'index.template.html', to: 'index.html' }
    	])
    ]
}
