import React, { Component } from 'react';

class StateExample extends Component {
  constructor(props) {
    super(props);
    //state 정의
    this.state = {
      loading: true,
      formData: 'on data',
    };
    // bind는 추후에 다시 다룸, 함수로 넘어갈 this는 반드시 생성자에서 bind로 묶어줘야 함
    this.handleData = this.handleData.bind(this);
    // 4초 후에 handleData 함수 호출
    setTimeout(this.handleData, 4000);
  }
  handleData() {
    const data = 'new data';
    const { formData } = this.state;
    // state 변경
    this.setState({
      loading: false,
      formData: data + formData,
    });
    //this.state.loading은 현재 true
    console.log('loading값: ', this.state.loading);
  }
  render() {
    return (
      <div>
        {/* state 데이터는 this.state로 접근 가능 */}
        <span>로딩중: {String(this.state.loading)}</span>
        <span>결과: {String(this.state.formData)}</span>
      </div>
    );
  }
}

export default StateExample;
