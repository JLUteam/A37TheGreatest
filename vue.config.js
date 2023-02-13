const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  //开启代理服务器
  devServer: {
    proxy: "http://1.13.2.149:8080 "
  }
})


