# 1min timer, electron-app sample

[![Build Status](https://travis-ci.org/wakayamarb/1min-timer.svg?branch=master)](https://travis-ci.org/wakayamarb/1min-timer)
[![codecov](https://codecov.io/gh/wakayamarb/1min-timer/branch/master/graph/badge.svg)](https://codecov.io/gh/wakayamarb/1min-timer)

webView: https://wakayamarb.github.io/1min-timer/

## bootstrap
```
$ git clone --depth=1 https://github.com/wakayamarb/1min-timer.git
$ npm install
```

## preview
```
$ npm start
```

## lint ECMAScript
```
$ npm run lint
```

## build

### asar archive
```
$ npm run asar
```

### desktop application

#### Without Win32

You can obtain Darwin(for MacOS) and linux binary.

```
$ npm run build
```

#### build Win32 app on non-windows environment

You can obtain exe.

```
$ brew install wine
$ npm run build-win32
```
