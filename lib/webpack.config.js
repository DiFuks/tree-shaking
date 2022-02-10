module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    clean: true,
    filename: 'index.js',
    library: {
      type: 'module'
    },
  },
  experiments: {
    outputModule: true
  }
}
