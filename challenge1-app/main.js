const  path = require('path');
const { app, BrowserWindow } = require('electron');

const challenge = require('./main-process/challenge1');

let mainWindow = null;

function initialize() {
    makeSingleInstance();
    function createWindow() {
        const windowOptions = {
            width: 800,
            height: 600,
            title: app.getName(),
            webPreferences: {
                nodeIntegration: true
            }
        }

        mainWindow = new BrowserWindow(windowOptions);
        mainWindow.loadURL(path.join('file://', __dirname, '/index.html'));

        mainWindow.on('closed', () => mainWindow = null);
    }

    app.on('ready', () => createWindow());
    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app.quit();
        }
    });
    app.on('activate', () => {
        if (mainWindow === null) {
            createWindow();
        }
    });
}
// Make this app a single instance app.
//
// The main window will be restored and focused instead of a second window
// opened when a person attempts to launch a second instance.
//
// Returns true if the current version of the app should quit instead of
// launching.
function makeSingleInstance() {
    if (process.mas) return

    app.requestSingleInstanceLock()

    app.on('second-instance', () => {
        if (mainWindow) {
            if (mainWindow.isMinimized()) mainWindow.restore()
            mainWindow.focus()
        }
    })
}

initialize();