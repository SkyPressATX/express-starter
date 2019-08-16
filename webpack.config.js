const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  mode: 'production',
  context: path.resolve(__dirname, 'src'),
  entry: './server.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: 'server.js'
  },
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: /node_modules/
      },
      {
        test: /.+\.spec\.js$/,
        use: {
          loader: 'mocha-loader',
        },
        exclude: /node_modules/
      }
    ]
  },
  externals: [nodeExternals()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src')
    },
    extensions: [ '.js' ],
  }
}
