module.exports = {
  testEnvironment: 'node',
	"reporters": [ "default", "jest-junit", ["./node_modules/jest-html-reporter", {
		"pageTitle": "Test Report"
	}]
  ]
};
