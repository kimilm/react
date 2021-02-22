import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodaysPlan from './03/TodaysPlan';
import PropComponent from './03/PropsComponent';
import ChildComponent from './03/ChildComponent';
import BooleanComponent from './03/BooleanComponent';
import ChildComponent2 from './03/ChildComponent2';
import DefaultPropsComponent from './03/DefaultPropsComponent';
import ChildProperty from './03/ChildProperty';
import StateExample from './03/StateExample';
import ForceUpdateExample from './03/ForceUpdateExample';
import LifecycleExample from './03/LifecycleExample';
import Counter from './03/Counter';
import NewCounter from './03/NewCounter';
import Equals from './03/Equals';
import ListExample from './03/ListExample';
import Todolist from './03/Todolist';
import Counter3 from './03/Counter3';

class App extends Component {
  render() {
    return (
      <div>
        <Counter3 />
      </div>
    );
  }
}

export default App;
