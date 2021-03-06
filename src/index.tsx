import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { makeStore, StoreContext } from './store/Store'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { LocaleProvider } from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import moment from 'moment'
// tslint:disable-next-line:no-import-side-effect
import 'moment/locale/zh-cn'

moment.locale('zh-cn')

const store = makeStore()

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <LocaleProvider locale={zh_CN}>
      <App />
    </LocaleProvider>
  </StoreContext.Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
