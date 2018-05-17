const path = require('path');

const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
        },
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        // {
        //   loader: 'css-loader',
        //   options: {
        //     sourceMap: true,
        //     modules: true,
        //     localIdentName: '[local]___[hash:base64:5]',
        //   },
        // },
        
        },
    ],
  },
  // externals: {
  //   // define newrelic as an external library
  //   // http://webpack.github.io/docs/configuration.html#externals
  //   newrelic: true
  // }
};
