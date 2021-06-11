
const path = require('path')

function resolve(dir){
  return path.join(__dirname,dir)
}

module.exports = {
  chainWebpack:(config)=>{
    // 起别名
    config.resolve.alias
    .set('style',resolve('./src/style'))
    .set('views',resolve('./src/views'))
    .set('components',resolve('./src/components'))
    .set('utils',resolve('./src/utils'))
    .set('api',resolve('./src/api'))
  }
}