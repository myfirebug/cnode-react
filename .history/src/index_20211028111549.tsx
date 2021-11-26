import React from 'react'
import ReactDOM from 'react-dom'
import {persistStore} from 'redux-persist'
import {PersistGate} from 'redux-persist/integration/react'
import {Provider} from 'react-redux'
import store from './store/index'
import App from './App'
const persistor = persistStore(store)

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
