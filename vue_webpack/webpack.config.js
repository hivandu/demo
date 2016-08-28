var path = require('path');
module.exports = {
  entry: './src/main.js',
  // 定义webpack输出的文件，我们再这里设置了。
  output:{
    path: './dist',
    publicPath: 'dist/',
    filename: 'build.js'
  },
  // devServer:{
  //   historypiFallback: true,
  //   hot: false,
  //   inline:true,
  //   grogress: true
  // },
  module: {
    loaders: [
      // 转换ES6语法
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      // 解析vue文件
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      // 图片转换，小于8k自动转化base64
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  },
  // 这里用于安装babel, 如果再根目录下有.babelrc配置，这里就不写了。
  babel:{
    presets: ['es2015', 'stage-0'],
    plugins:['transform-runtime']
  }
}