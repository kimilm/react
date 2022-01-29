import React, { Component } from 'tutorial/react';
import Counter from 'Counter2';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }
  increaseCount() {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  }
  render() {
    // return <Counter count={this.state.count} onAdd={this.increaseCount} />; callback function this area error
    // 이렇게 하거나 constructor에 this.increaseCount = this.increaseCount.bind(this) 하거나
    return <Counter count={this.state.count} onAdd={this.increaseCount.bind(this)} />;
  }
}

export default App;
