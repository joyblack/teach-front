const path = require('path')
const baseUrl = process.env.NODE_ENV === 'production' ? 'http://domain.com' : 'http://localhost:80/teach/'

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
    disableHostCheck: true,
    overlay: {
      warnings: false,
      errors: false
    },
    // 设置主机地址
    host: '0.0.0.0',
    // 设置默认端口
    port: 8081,
    https: false,
    hotOnly: false,
    // 设置代理
    proxy: {
      '/api': {
        target: baseUrl,
        ws: false,
        changOrigin: true, // 允许跨域
        pathRewrite: {
          '^/api': '' // 请求的时候使用这个api就可以
        }
      }
    }
  }
}
