// import 'babel-polyfill';
import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import { connect } from 'react-redux';

import axios from 'axios';

import RequestButton from './RequestButton';
import Api from '../api/index.js';

injectGlobal`
  body {
    margin: 0;
    font-family:
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Roboto,
      Helvetica,
      Arial,
      sans-serif,
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol";
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calC(100vh);
`;

class App extends Component {

  handleRequest = result => {
    const {
      onFindBulbs
    } = this.props;

    Api.getBulbs({
      brightness: 100
    });

    onFindBulbs('test6');
  }

  render() {
    const {
      store
    } = this.props;

    return (
      <Container> 
        <RequestButton request={ this.handleRequest }/>
      </Container>
    );
  }
}

export default connect(
  state => ({
    store: state
  }),
  dispatch => ({
    onFindBulbs: bulbs => dispatch({
      type: 'ADD_BULBS',
      payload: bulbs
    })
  })
)(App);
