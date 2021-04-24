import axios from 'axios'
import { Toast } from 'vant';
// 创建一个axios的实例
 const http = axios.create({
      baseURL: 'https://m.maizuo.com',
      timeout: 10000,
      headers: {'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16165628241337208002838529","bc":"110100"}',}
    });
// 拦截器
http.interceptors.request.use(function (config) {
  // Do something before request is sent
  // console.log(config)
  Toast.loading({
    message: '加载中...',
    forbidClick: true,
  });
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
http.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  Toast.clear()
  return response.data;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});


export default http



// 请求头中的参数 后端设置 没有跨越的限制
// Access-Control-Allow-Origin: *