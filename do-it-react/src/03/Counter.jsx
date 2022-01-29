import React, { Component } from 'tutorial/react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 초기 값을 프로퍼티에서 전달받아서 생성
      count: props.count,
    };

    this.increaseCount = this.increaseCount.bind(this);
  }
  increaseCount() {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  }
  render() {
    return (
      <div>
        현재 카운트: {this.state.count}
        <button onClick={this.increaseCount}>카운트 증가</button>
      </div>
    );
  }
}

export default Counter;
