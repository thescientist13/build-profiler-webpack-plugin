const BuildProfilerPlugin = require('../../../src/index');

module.exports = {
  entry: {
    app: __dirname + '/index.js'
  },

  output: {
    path: './dest/'
  },

  plugins: [
    new BuildProfilerPlugin()
  ]

};