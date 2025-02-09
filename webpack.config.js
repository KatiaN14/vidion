// webpack.config.js
const path = require('path');

module.exports = {
  mode: 'development', // Change to 'production' for production builds
  entry: './vidion/script.js', // Adjust if your main JS file is named differently
  output: {
    filename: 'bundle.js', // Name for the bundled file
    path: path.resolve(__dirname, 'dist'), // Bundled file output folder
  },
};
