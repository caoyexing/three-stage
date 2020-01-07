import React from 'react'
import ReactDom from 'react-dom'
import App from './router/router'
import 'antd/dist/antd.css'

import * as serviceWorker from './serviceWorker';

ReactDom.render(<App/>,document.getElementById('root'));
serviceWorker.unregister();