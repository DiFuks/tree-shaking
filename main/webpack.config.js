module.exports = {
  mode: 'development',
  devtool: false,
  entry: './src/index.js',
  optimization: {
    usedExports: true,
    minimize: true,
  },
}
