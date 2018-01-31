import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';

const Container = styled.button``;

export default class RequestButton extends Component {

  render() {
    const {
      request
    } = this.props;

    return (
      <Container onClick={ request }> 
        Connect1
      </Container>
    );
  }
}
