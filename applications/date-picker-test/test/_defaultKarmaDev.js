var angularDevKarma = require('@angular-devkit/build-angular/plugins/karma');
var karmaChromeLauncher = require('karma-chrome-launcher');
var karmaCoverageIstanbul = require('karma-coverage-istanbul-reporter');
var karmaJasmine = require('karma-jasmine');
var karmaJasmineHtmlReporter = require('karma-jasmine-html-reporter');
var karmaSpecReporter = require('karma-spec-reporter');

var defaultKarmaConf = {
  autoWatch: false,
  basePath: '',
  browsers: [
    'ChromeHeadless'
  ],
  client: {
    clearContext: false
  },
  colors: false,
  coverageIstanbulReporter: {
    dir: require('path').join(__dirname, '../coverage'),
    fixWebpackSourcePaths: true,
    reports: [
      'html',
      'lcovonly',
      'text-summary'
    ]
  },
  frameworks: [
    '@angular-devkit/build-angular',
    'jasmine'
  ],
  plugins: [
    angularDevKarma,
    karmaChromeLauncher,
    karmaCoverageIstanbul,
    karmaJasmine,
    karmaJasmineHtmlReporter,
    karmaSpecReporter
  ],
  port: 9876,
  reporters: [
    'progress',
    'kjhtml',
    'spec'
  ],
  restartOnFileChange: false,
  singleRun: true
}

module.exports = defaultKarmaConf;
