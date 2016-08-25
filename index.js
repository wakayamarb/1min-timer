'use strict';
/**
 * Main Process
 * - GUI (renderer process)
 */

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

app.on('ready', function(){
    mainWindow = new BrowserWindow({
        width: 600,
        height: 300,
        title: "1min timer"
    });
    mainWindow.loadURL('file://' + __dirname + '/www/index.html');
    mainWindow.on('close', function(){
        mainWindow = null;
    });
});
