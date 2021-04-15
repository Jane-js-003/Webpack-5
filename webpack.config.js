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
  // devServer会启动一个HTTP开发服务器，会把一个文件夹作为静态根目录
  // 为了提高性能，使用的是内存文件系统
  // devServer默认情况下会读取打包后的路径，其实静态文件的根目录是可以有多个的
  devServer: {
    // 启动的时候会优先寻找output的配置路径，如果没有再执行这里的配置
    contentBase: resolve(__dirname, 'dist'),
    compress: true, // 是否启动压缩
    writeToDisk: true, // 如果你指定此选项，也会把打包后的文件写入硬盘一份（即生成打包后的dist文件夹,写入硬盘为了方便看，方便调整）
    port: 8080, // 指定服务器的端口
    open: true // 自动打开浏览器
  },
  module: {
    rules: [
      {test:/\.txt$/, use:'raw-loader'},
      {test:/\.css$/, use:['style-loader', 'css-loader']},
      {test:/\.less$/, use:['style-loader', 'css-loader', 'less-loader']},
      {test:/\.scss$/, use:['style-loader', 'css-loader', 'sass-loader']}
    ]
  },
  plugins: [ // 插件
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}
