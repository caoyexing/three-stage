import axios from 'axios'
import { getItem } from './webStorage';
// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  config.data.token= getItem('token') || ''
  // console.log(getItem(('token')))
  // console.log(config)
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response.data;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});
export default axios
