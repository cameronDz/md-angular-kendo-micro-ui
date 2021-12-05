// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html
var defaultConf = require('./defaultKarmaDev');

/* main karma file */
module.exports = function (config) {
  config.set({
    ...defaultConf,
    logLevel: config.LOG_INFO
  });
};
