import React, { Component } from 'tutorial/react';

class MyComponent extends React.Component {
  componentDidUpdate() {
    console.log('MyComponent 새로 고침');
  }
}

class MyPureComponent extends React.PureComponent {
  componentDidUpdate() {
    console.log('MyPureComponent 새로 고침');
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.listValue = [{ name: 'Park' }, { name: 'Lee' }];
    this.state = { version: 0 };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    setTimeout(() => {
      this.listValue[0].name = 'Justin';
      this.setState({ version: 1 });
    }, 100);
    setTimeout(() => {
      this.listValue = [{ name: 'Justin' }, { name: 'Lee' }];
      this.setState({ version: 2 });
    }, 200);
  }
  render() {
    return (
      <div className="body">
        <MyComponent value={this.listValue} />
        <MyPureComponent value={this.listValue} />
        <botton onClick={this.handleClick}>버튼</botton>
      </div>
    );
  }
}

export default App;
