import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'


import './index.css';
import App from './components/App';
import reducer from './reducers'
import logger from './middleware/logger'

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);


