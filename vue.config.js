const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  //开启代理服务器
  devServer: {
    host: '0.0.0.0',
    proxy: {
      '/api':{
        target: 'https://mineralsteins.icu:8080',
        changeOrigin : true,
        pathRewrite:{
          '^/api':'',
        },
      },
    },
    // proxy : "https://mineralsteins.icu:8080"

  }
})


