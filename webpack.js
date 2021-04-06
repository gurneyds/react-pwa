const path = require('path');

module.exports = {
  entry: {
    "service-worker-team": './src/service-worker-team.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build')
  }
};