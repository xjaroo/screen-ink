const { app, BrowserWindow,globalShortcut } = require('electron');
const path = require('path');
const  { toggleDevTools, toggleMinimize } = require("./helper");

const MAIN_HTML = path.join('file://', __dirname, 'main.html');
let isWindowMinimized = false;
const onAppReady = function () {
  let parent = new BrowserWindow({
    width: 900,
    height: 900,
    transparent: true,
    hasshadow: true,
    frame: false,
     webpreferences: {
         nodeintegration: true,
         enableremotemodule: true,
    }
  });

    globalShortcut.register('CommandOrControl+I', () => {
        toggleDevTools(parent);
    });
    globalShortcut.register('CommandOrControl+X', () => {
        toggleMinimize(parent);
    });

  parent.maximize();
  parent.once('close', () => {
    parent = null;
  });

  parent.loadURL(MAIN_HTML);
};

app.on('ready', () => setTimeout(onAppReady, 500));
