import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';

const initialState = [
  'test',
  'test2'
]

const bulbsData = (state = initialState, action) => {
  const {
    type,
    payload 
  } = action;

  switch(type) {
    case 'ADD_BULBS':
      return [...state, payload];
    default:
      return state;
  }
};

const store = createStore(bulbsData);

const mountNode = document.getElementById("root");

store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
  <Provider store={ store }>
    <App/>
  </Provider>
  ,mountNode
);