'use strict'
const utils = require('./utils')
const config = require('../config')
const webpack = require('webpack')
const path = require('path')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const isProduction = process.env.NODE_ENV === 'production'
const sourceMapEnabled = isProduction
  ? config.build.productionSourceMap
  : config.dev.cssSourceMap

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: isProduction
  }),
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  },
  configureWebpack: {
    plugins: [
     new webpack.DllReferencePlugin({
         context: process.cwd(),
         manifest: require('./public/vendor/vendor-manifest.json')
     }),
        // 将 dll 注入到 生成的 html 模板中
     new AddAssetHtmlPlugin({
        // dll文件位置
        filepath: path.resolve(__dirname, './public/vendor/*.js'),
         // dll 引用路径
         publicPath: './vendor',
        // dll最终输出的目录
         outputPath: './vendor'
      })
    ]
  }
}
