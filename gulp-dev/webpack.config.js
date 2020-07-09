const path = require("path");
module.exports = {
	mode: "development",
	entry: "../src/js/index.js",
	output: {
		path: path.resolve(__dirname, "../dist/js"),
		filename: "index.js"
	},
	devtool: "source-map",
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			use: ["babel-loader"]
		}, {
			test: /\.js$/,
			use: ["source-map-loader"],
			enforce: "pre"
		}]
	}
};