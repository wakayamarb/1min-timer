# 1Minute Timer, Electron Application Sample

[![Build Status](https://travis-ci.org/wakayamarb/1min-timer.svg?branch=master)](https://travis-ci.org/wakayamarb/1min-timer)

This is a repository of simple desktop application sample made with HTML, CSS and JavaScript based on [Electron](http://electron.atom.io/). Compiled packages are available on Mac, Linux and Windows.

**Features**
- BDD style unit testing
- Scenario based e2e testing with [Protractor](http://www.protractortest.org/#/)
- Test and deploy on [Travis CI](https://travis-ci.org/wakayamarb/1min-timer)
- [Web preview](https://wakayamarb.github.io/1min-timer/) on Github pages
- [Releasing binaries](https://github.com/wakayamarb/1min-timer/releases) on Github

Application can be previewed on your Chrome, Firefox or other browsers with ES2015 implementation.

https://wakayamarb.github.io/1min-timer/

![screenshot-01](./images/screenshot-01.png)

## Install

```
$ git clone https://github.com/wakayamarb/1min-timer.git
$ cd 1min-timer
$ npm install
```

## Test

Unit tests and e2e tests are going to be done.

```
$ npm test
```

## Preview on Electron

```
$ npm start
```

## Build darwin and linux package

```
$ npm run build
```

## Build win32 package on Mac

```
$ brew install wine
$ npm run build-win32
```

## Build win32 package on Windows

It have been never tried but perhaps command below works.
```
$ npm run build-win32
```
