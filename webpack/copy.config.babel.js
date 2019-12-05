const CopyPlugin = require("copy-webpack-plugin");

module.exports = [
	{
		entry: __dirname + "/copy.entry.js",
		output: {
			path: __dirname + "/../_release",
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
						"types/**",
						"_temp.js",
						"_release",
						"assets-repo/**",
						"node_modules/**",
						"package.json",
						"package-lock.json",
						"pro/**",
						"README.md",
						"src/**",
						"tsconfig.json",
						"webpack/**"
					]
				}
			])
		]
	}
];