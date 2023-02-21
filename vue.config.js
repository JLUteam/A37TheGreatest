const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  //开启代理服务器
  devServer: {
    host: '0.0.0.0',
    proxy: "https://mineralsteins.icu:8080 "
  }
})


