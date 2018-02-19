
// scan all your files for requires & import
// bundles everything together to a destination you specify
// thats the file you add with a single script tag

// path will give you the absolute path regardless system
const path = require('path');

// webpack will look for index.js in app folder

const config = {
  entry: {
    app: './app'
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  }
}

module.exports = config
