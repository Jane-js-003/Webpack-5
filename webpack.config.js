const {resolve} = require('path')
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    // __dirname 当前的文件所在的目录
    path: resolve(__dirname, 'dist'), // 输出文件夹的绝对路径
    filename: 'main.js' // 输出的文件名
  }
}
