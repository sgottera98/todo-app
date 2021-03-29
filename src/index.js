import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux'

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import './index.css';
import App from './main/app';
import reducers from './main/reducers'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__  
  && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers, devTools)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
=======
import './index.css';
import App from './main/app';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
>>>>>>> 5c46c9faf485a8648943b4c46c1e03a8098c55a6
  document.getElementById('root')
);

