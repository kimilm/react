import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { About } from './components/About';
import { Contact } from './components/Contact';

import './custom.css'
import ReactFragmentDemo from './samples/ReactFragmentDemo';
import { StateDemo } from './samples/StateDemo';
import { StateDescription } from './samples/StateDescription';
import OnClickEventHandler from './components/event_handler/OnClickEventHandler';
import { OneWayBindingDemo } from './samples/OneWayBindingDemo';
import { ToDoListInMemory } from './components/ToDoListInMemory';
import FunctionStateDemo from './samples/FunctionStateDemo';
import UseEffectDemo from './samples/UseEffectDemo';
import UseEffectFetchApi from './samples/UseEffectFetchApi';
import { FetchApiPractice } from './samples/FetchApiPractice';
import { TextBoxOnChangeEventHandler } from './samples/TextBoxOnChangeEventHandler';
import { BooksIndex } from './components/books/BooksIndex';
import { BooksCreate } from './components/books/BooksCreate';
import { BooksEdit } from './components/books/BooksEdit';
import { BooksDelete } from './components/books/BooksDelete';

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/reactFragmentDemo' component={ReactFragmentDemo} />
        <Route path='/stateDemo' component={StateDemo} />
        <Route path='/stateDescription' component={StateDescription} />
        <Route path='/onClickEventHandler' component={OnClickEventHandler} />
        <Route path='/oneWayBinding' component={OneWayBindingDemo} />
        <Route path='/toDoListInMemory' component={ToDoListInMemory} />
        <Route path='/functionStateDemo' component={FunctionStateDemo} />
        <Route path='/useEffectDemo' component={UseEffectDemo} />
        <Route path='/useEffectFetchApi' component={UseEffectFetchApi} />
        <Route path='/fetchApiPractice' component={FetchApiPractice} />
        <Route path='/textBoxOnChangeEventHandler' component={TextBoxOnChangeEventHandler} />
        <Route path={['/books', '/books/index']} component={BooksIndex} exact />
        <Route path='/books/create' component={BooksCreate} exact={true} />
        <Route path='/books/edit/:id' component={BooksEdit} exact />
        <Route path='/books/delete/:id' component={BooksDelete} exact />
      </Layout>
    );
  }
}
