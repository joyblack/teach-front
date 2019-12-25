// const PUBLIC_PATH = process.env.NODE_ENV === 'production' ? 'http://localhost:80/dist/' : '/ssss'
const path = require('path')

const resolve = dir => path.join(__dirname, dir)

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  outputDir: 'dist',
  assetsDir: 'static',
  indexPath: 'index.html',
  // 配置路径别称
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))// // @符号就代表项目路径
      .set('_c', resolve('src/components'))// _c代表组件目录
  },
  // 打包时不生成.map文件,减小打包大小，以及打包速度
  productionSourceMap: false,
  devServer: {
    overlay: {
      warnings: false,
      errors: false
    },
    // 设置主机地址
    host: 'localhost',
    // 设置默认端口
    port: 8081,
    // 设置代理
    proxy: {
      '/api': {
        // 目标 API 地址
        target: 'http://127.0.0.1:80/', // 接口的域名
        // 如果要代理 websockets
        ws: false,
        // 将主机标头的原点更改为目标URL
        changeOrigin: true
      }
    }
  }
}
