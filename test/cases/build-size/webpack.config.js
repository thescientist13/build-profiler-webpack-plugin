const path = require('path');
const BuildProfilerPlugin = require('../../../src/index');

module.exports = {
  entry: {
    app: path.join(__dirname, 'index.js')
  },

  output: {
    path: './build/'
  },

  plugins: [
    new BuildProfilerPlugin()
  ]

};