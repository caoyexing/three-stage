import React from 'react';
import ReactDOM from 'react-dom';
// 按需加载 降级 less less-loader
// import 'antd/dist/antd.css'
//引入的是路由的入口文件
import App from './router/router';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import store from './store/store'
import 'react-quill/dist/quill.snow.css';
// 国际化 中文
import {ConfigProvider} from 'antd'
import zhCN from 'antd/es/locale/zh_CN';
ReactDOM.render(
  <ConfigProvider locale={zhCN}>
 <Provider store={store}>
    <App />
 </Provider>
 </ConfigProvider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
