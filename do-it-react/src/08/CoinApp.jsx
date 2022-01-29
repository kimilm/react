import React, { PureComponent } from 'tutorial/react';
import { Provider } from 'react-redux';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AppLayout from './components/AppLayout';
import MainPage from './components/main/MainPage';
import NotificationContainer from './containers/main/NotificationContainer';

import configureStore from './store/configureStore';

import ModalProvider from './ModalProvider';
import NotFound from './components/NotFound';
import RouterStateContainter from './containers/RouterStateContainter';

class CoinApp extends PureComponent {
  store = configureStore();

  render() {
    return (
      <Provider store={this.store}>
        <Router>
          <RouterStateContainter />
          <ModalProvider>
            <AppLayout>
              <Switch>
                <Route path="/" exact render={() => <MainPage />} />
                <Route path="*" component={NotFound} />
                <NotificationContainer />
              </Switch>
            </AppLayout>
          </ModalProvider>
        </Router>
      </Provider>
    );
  }
}

export default CoinApp;
