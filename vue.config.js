const BASE_URL = process.env.NODE_ENV === 'production' ? '/iview-admin/' : '/'
const path = require('path')

const resolve = dir => path.join(__dirname, dir)

module.export = {
  baseUrl: BASE_URL,
  // 配置路径别称
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))// // @符号就代表项目路径
      .set('_c', resolve('src/components'))// _c代表组件目录
  },
  // 打包时不生成.map文件,减小打包大小，以及打包速度
  productionSourceMap: false,
  // 跨域配置：告诉开发服务器，将任何请求都代理到此URL（静态文件除外）
  devServer: {
    proxy: 'http://localhost:80'
  }
}
