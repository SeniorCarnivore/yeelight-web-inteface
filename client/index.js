import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import App from './components/App';

const bulbsData = (state = [], action) => {
  const {
    type,
    payload 
  } = action;

  switch(type) {
    case 'ADD_BULB':
      return [...state, payload];
    default:
      return state;
  }
};

const store = createStore(bulbsData);

const mountNode = document.getElementById("root");

store.subscribe(() => console.log(store.getState()));

store.dispatch({
  type: 'ADD_BULB',
  payload: 'test bulb'
});

store.dispatch({
  type: 'ADD_BULB',
  payload: '2 test bulb'
});

ReactDOM.render(<App/>, mountNode);