const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'development', // 开发（development）/生产（production）环境
  entry: './src/index.js',
  output: {
    // __dirname 当前的文件所在的目录
    path: resolve(__dirname, 'dist'), // 输出文件夹的绝对路径
    filename: 'main.js' // 输出的文件名
  },
  module: {
    rules: [
      {test:/\.txt$/, use:'raw-loader'}
    ]
  },
  plugins: [ // 插件
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}
