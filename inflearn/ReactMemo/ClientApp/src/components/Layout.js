import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import { Copyright } from './shared/Copyright';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <NavMenu />
        <Container>
          {this.props.children}
        </Container>
        <hr />
        <Copyright />
      </div>
    );
  }
}
