import React, { Component } from 'react';
import PropTypes from 'prop-types'; // prop-types 라이브러리 import

class PropsComponent extends Component {
  render() {
    return <div className="message-container">{this.props.name}</div>;
  }
}

PropsComponent.propTypes = {
  // 특수 변수로 (라이브러리 임포트 명과 다르니 주의) 프로퍼티 자료형 정의
  name: PropTypes.string, // 자료형을 객체 형태로 저장
};

export default PropsComponent;
