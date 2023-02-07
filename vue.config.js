module.exports= {
productionSourceMap:false,
  lintOnSave: false, //关闭eslint检查
devServer:{
    proxy:{
      '/api':{
        target:'http://gmall-h5-api.atguigu.cn',
    
    
      },
    },
},
}
