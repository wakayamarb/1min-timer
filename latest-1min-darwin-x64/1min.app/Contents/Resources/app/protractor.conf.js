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
  // ----- How to connect to Browser Drivers -----------------------------------
  chromeDriver: './node_modules/.bin/chromedriver',
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  directConnect: true,
  // ----- What tests to run ---------------------------------------------------
  specs: ['test/*_e2e.js'],
  // ----- How to set up browsers ----------------------------------------------
  capabilities: {
    browserName: 'chrome',
    platform: 'LINUX',
    chromeOptions: {
      binary: './node_modules/.bin/electron',
      args: ['--test-type=webdriver', 'app=main.js']
    }
  },
  // ----- The test framework --------------------------------------------------
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    reporter: 'list',
    slow: 3000,
    enableTimeouts: false
  },
  onPrepare: function() {
    browser.ignoreSynchronization = true;
    browser.resetUrl = 'file://';
  }
};
