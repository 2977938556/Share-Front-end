const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  
  //打包的时候可以看到哪里报错了
  // productionSourceMap: false,

  //配置跨域的问题
  devServer:{
    proxy:{
      '/api':{
        target:'http://192.168.43.209:8848'
      }
    }
  }
})
