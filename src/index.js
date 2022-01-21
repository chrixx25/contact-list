import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
import Main from './components/page/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore } from 'redux';
import contactReducer from '../src/redux/reducer/ContactReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

const store = createStore(contactReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root')
);

