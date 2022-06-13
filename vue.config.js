const { defineConfig } = require('@vue/cli-service')
const path = require('path')
function resolve (dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: { https: true },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Rita kuo'
        args[0].domain = 'https://chia0620.github.io'
        args[0].description = 'Rita kuo, 追求完美的前端工程師。'
        return args
      })

    config.module
      .rule('images')
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({ disable: process.env.NODE_ENV !== 'production' })

    config.module.rule('svg').exclude.add(resolve('src/assets/icons')).end()
    // 新加一个icons的处理规则,用svg-sprite-loader处理，将上面那个目录添加到这个规则的处理范围内
    config.module
      .rule('svg-sprite-loader') // 新添加的处理规则
      .test(/\.svg$/)
      .include // 添加
      .add(resolve('src/assets/icons')) // 处理svg目录
      .end()
      .use('svg-sprite-loader') // 使用svg-sprite-loader处理
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })

    // 修改 images-loader 配置
    config.module
      .rule('images')
      .exclude
      .add(resolve('src/assets/icons'))
  }
})
