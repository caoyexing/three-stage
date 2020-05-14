import React from 'react';
import ReactDOM from 'react-dom';
// 按需加载 降级 less less-loader
// import 'antd/dist/antd.css'
//引入的是路由的入口文件
import App from './router/router';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import store from './store/store'
ReactDOM.render(
 <Provider store={store}>
    <App />
 </Provider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
