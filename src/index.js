import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import store from "./mobx/store";
import App from './app'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
