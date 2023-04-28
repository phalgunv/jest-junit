module.exports = {
  testEnvironment: 'node',
	"reporters": [ "default", 
	["jest-junit", {
		outputDirectory: 'reports',
		outputName: 'jest-junit.xml',
	}], 
	["./node_modules/jest-html-reporter", {
		"pageTitle": "jest-html-reporter",
		"outputPath": "reports/jest-html-reporter.html"
	}],
	['jest-html-reporters', { "publicPath": "reports" }]
  ]
};
