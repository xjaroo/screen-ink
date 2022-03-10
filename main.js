const { app, BrowserWindow } = require('electron');
const path = require('path');

const MAIN_HTML = path.join('file://', __dirname, 'main.html');
const CHILD_PADDING = 50;

const onAppReady = function () {
  let parent = new BrowserWindow({
    width: 300,
    height: 300,
    transparent: true,
    frame: false
  });

  parent.maximize();
 // parent.webContents.openDevTools()
  parent.once('close', () => {
    parent = null;
  });

  parent.loadURL(MAIN_HTML);
};

//~ app.on('ready', onAppReady);
app.on('ready', () => setTimeout(onAppReady, 500));
