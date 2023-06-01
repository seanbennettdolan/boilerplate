import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Main from './components/Main';
import './index.css';

ReactDOM.render(
    <Provider store={store}>
  <Main />
  </Provider>,
document.getElementById('root') // make sure this is the same as the id of the div in your index.html
);