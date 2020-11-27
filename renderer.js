// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.


const path = require('path')


const appFolder = path.resolve(process.execPath, '..');
  console.log(appFolder)

  const rootAtomFolder = path.resolve(appFolder, '..');
  console.log(rootAtomFolder)

  const updateDotExe = path.resolve(path.join(rootAtomFolder, 'Update.exe'));
  console.log(updateDotExe)


  const exeName = path.basename(process.execPath);
  console.log(exeName)