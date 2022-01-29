import React, { Component } from 'tutorial/react';

export default class ScrollSpy extends React.Component {
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
    this.checkPosition = this.checkPosition.bind(this);
  }
  setRef(ref) {
    this.ref = ref;
  }
  checkPosition() {
    if (this.ref.getBoundingClientRect().top < window.innerHeight) {
      console.log('enter');
    } else {
      console.log('exit');
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.checkPosition);
  }
  componentWillUnmonunt() {
    window.removeEventListener('scroll', this.checkPosition);
  }
  render() {
    return <div ref={this.setRef} />;
  }
}

export default ScrollSpy;
