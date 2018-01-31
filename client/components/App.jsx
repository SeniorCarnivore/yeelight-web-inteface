// import 'babel-polyfill';
import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';

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

const ConnectButton = styled.button`
`;

export default class App extends Component {

  render() {

    return (
      <Container> 
        <ConnectButton>Connect</ConnectButton>
      </Container>
    );
  }
}
