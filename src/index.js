import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import './index.css'
import App from './App'

const store = configureStore()

render(
  /**
   * Provider contains and handles the entire global state inside "store"
   * Doing `store.getState()` will show you the object that makes up this global
   * store. Also it's a way to access the store directly without connection.
   *
   * `store.dispatch` is also a thing ;) it allows to dispatch actions directly
   *
   **/
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
