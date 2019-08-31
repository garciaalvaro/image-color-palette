const CopyPlugin = require("copy-webpack-plugin");

module.exports = [
	{
		entry: __dirname + "/copy.entry.js",
		output: {
			path: __dirname + "/../_extras/release",
			filename: "_temp.js"
		},
		plugins: [
			new CopyPlugin([
				{
					from: "**/*",
					ignore: [
						".*",
						".*/**",
						"_extras/**",
						"node_modules/**",
						"package*",
						"pro/**",
						"src/**",
						"tsconfig*",
						"types/**"
					]
				}
			])
		]
	}
];
