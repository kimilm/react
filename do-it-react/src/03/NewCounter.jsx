import React, { Component } from 'react';

class NewCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.increaseCount = this.increaseCount.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    const { count } = props;
    return {
      count, // 프로퍼티에서 전달된 카운트 값을 보관
      newCount: count === state.count ? state.newCount : count, // 프로퍼티가 변경되지 않았다면 기존 state값, 변경되었다면 변경된 props값
    };
  } //getDerivedStateFromProps 함수는 다른 프로퍼티가 변경되어도 호출됨, count가 변경되었는지 비교하려면 이처럼 값을 따로 관리해아함

  increaseCount() {
    this.setState(({ newCount }) => ({
      newCount: newCount + 1,
    }));
  }
  render() {
    return (
      <div>
        현재 카운트: {this.state.newCount}
        <button onClick={this.increaseCount}>카운트 증가</button>
      </div>
    );
  }
}

export default NewCounter;
