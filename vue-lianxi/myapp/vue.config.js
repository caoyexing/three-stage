
module.exports = {
  devServer: {
    proxy: {
      // 直接将.com后面的代理过来 不用替换
        '/ajax': {
            // 此处的写法，目的是为了 将 /api 替换成 https://www.baidu.com/
            target: 'https://m.maoyan.com',
            // 允许跨域
            changeOrigin: true,
        }
    }
}
}