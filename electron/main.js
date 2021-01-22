"use strict";
exports.__esModule = true;
var path = require("path");
var electron_1 = require("electron");
var isDev = require("electron-is-dev");
var win = null;
function createWindow() {
    win = new electron_1.BrowserWindow({
        width: 1024,
        height: 728,
        show: false,
        frame: true,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        }
    });
    //   win.loadURL("http://localhost:3000/")
    if (isDev) {
        win.loadURL("http://localhost:3000/");
        win.webContents.openDevTools();
    }
    else {
        win.loadFile(path.join(__dirname, "../build/index.html"));
    }
    win.maximize();
    win.once("ready-to-show", function () {
        win.show();
    });
    /*win.once("close", () => {
      app.quit()
    })*/
}
electron_1.app.whenReady().then(createWindow);
electron_1.app.on("window-all-closed", function () {
    if (process.platform !== "darwin") {
        electron_1.app.quit();
    }
});
electron_1.app.on("activate", function () {
    if (electron_1.BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
