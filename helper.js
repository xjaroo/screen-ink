let isWindowMinimized = false;

function toggleDevTools(parent) {
    if (parent.webContents.isDevToolsOpened()) {
        parent.webContents.closeDevTools();
    } else {
        parent.webContents.openDevTools();
    }
}

function toggleMinimize(parent) {
    if (isWindowMinimized) {
        parent.restore(); // Restore or maximize the window
        isWindowMinimized=true;
    } else {
        parent.minimize(); // Minimize the window
        isWindowMinimized=false;
    }
    isWindowMinimized = !isWindowMinimized;
}

module.exports = {
    toggleDevTools,
    toggleMinimize
};