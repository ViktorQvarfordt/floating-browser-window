const { app, BrowserWindow, BrowserView, globalShortcut } = require('electron')

const url = process.argv[1] || 'https://google.com'
const toggleVisibilityShortcut = process.argv[2] || 'Alt+B'

let mainWindow = null

function createWindow() {
  mainWindow = new BrowserWindow({ 
    width: 800, 
    height: 400,
    frame: false,
    alwaysOnTop: false,
  })

  const view = new BrowserView({ webPreferences: { partition: 'persist:main' } })
  
  mainWindow.addBrowserView(view)

  view.webContents.loadURL(url)
  
  const updateViewBounds = () => {
    const { width, height} = mainWindow.getBounds()
    view.setBounds({ x: 0, y: 0, width, height })
  }

  updateViewBounds()

  mainWindow.on('resize', updateViewBounds)

  globalShortcut.register(toggleVisibilityShortcut, () => {
    if (mainWindow.isFocused()) {
      mainWindow.hide()
    } else {
      mainWindow.show()
    }
  })

  // mainWindow.on('close', (event) => {
  //   event.preventDefault()
  //   mainWindow.hide()
  // })
}

app.whenReady().then(createWindow)
