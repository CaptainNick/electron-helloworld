const {app, BrowserWindow} = require('electron')

let mainWindow

function createWindow () {
	// Create the browser window.
	mainWindow = new BrowserWindow({
	width: 800,
	height: 600,
	webPreferences: {
		nodeIntegration: true
	}
})

mainWindow.loadFile('index.html')

mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

//When electron is ready to create browser windows
//Some APIs can only be used after this event occurs
app.on('ready', createWindow)

// Quit when all windows are closed
app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})

app.on('activate', function () {
	if (mainWindow === null) {
		createWindow()
	}
})