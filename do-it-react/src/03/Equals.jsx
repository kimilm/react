import React, { Component } from 'react';
import shallowEqual from 'shallowequal';
class Equals extends Component {
  render() {
    const obj = { name: 'park' };
    const mylist = [1, 2, 3, obj];
    const list1 = [1, 2, 3, obj];
    const list2 = [1, 2, 3, { name: 'park' }];

    return (
      <div>
        {/* 같은 요소를 가지고 있지만 새롭개 정의된 배열, 깊은 비교는 false */}
        <div>mylist === list1: {String(mylist === list1)}</div>

        {/* 같은 요소를 가지고 있어서 얕은 비교는 true */}
        <div>shallowEqual(mylist, list1): {String(shallowEqual(mylist, list1))}</div>

        {/* list2의 마지막 요소는 obj와 같은 내용을 포함하고는 있지만 새 객체임, false */}
        <div>shallowEqual(list1, list2): {String(shallowEqual(list1, list2))}</div>
      </div>
    );
  }
}

export default Equals;
