/**
 * Protractor webdriver configuration
 */

/*global browser*/
require('babel-register')({
  presets: ['es2015'],
  plugins: ['babel-plugin-espower'],
  extensions: ['.js']
});

exports.config = {
  chromeDriver: './node_modules/.bin/chromedriver',
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  framework: 'mocha',
  directConnect: true,
  specs: [
    'test/*_e2e.js'
  ],
  capabilities: {
    browserName: 'chrome',
    platform: 'LINUX',
    chromeOptions: {
      binary: './node_modules/.bin/electron',
      args: ['--test-type=webdriver', 'app=main.js']
    }
  },
  onPrepare: function() {
    browser.ignoreSynchronization = true;
    browser.resetUrl = 'file://';
  },
  mochaOpts: {
    ui: '',
    reporter: 'list',
    slow: 3000,
    enableTimeouts: false
  }
};
