/**
 * Main Process
 * - GUI (renderer process)
 */

const {app, BrowserWindow} = require('electron')

let mainWindow

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width:  400,
    height: 250,
    title:  '1min timer',
    center: true,
    resizable: false,
    frame: false
  })
  mainWindow.loadURL(`file://${__dirname}/www/index.html`)
  mainWindow.on('close', () => {
    mainWindow = null
  })
})
