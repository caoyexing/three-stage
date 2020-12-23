
const path = require("path");
function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = {
  // 跨域
  devServer:{
    proxy:{
      '/hehe':{
        target:'https://u.y.qq.com', // 请求的目标路径
        changeOrigin:true, //允许改变请求源
        pathRewrite:{
          "^/hehe":'' //路径重新
        }
      },
    }
  },

  //别名
    chainWebpack: config=>{
        config.resolve.alias
            .set('style', resolve('./src/style'))
            .set('api', resolve('./src/api'))
            .set('components', resolve('./src/components'))
            .set('pages', resolve('./src/pages'))
    }
}