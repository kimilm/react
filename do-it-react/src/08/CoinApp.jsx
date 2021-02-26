import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';

import AppLayout from './components/AppLayout';
import MainPage from './components/main/MainPage';
// import CoinOverview from './components/main/CoinOverview';
// import TransactionList from './components/main/TransactionList';

import configureStore from './store/configureStore';

import ModalProvider from './ModalProvider';

class CoinApp extends PureComponent {
  store = configureStore();

  render() {
    return (
      <Provider store={this.store}>
        <ModalProvider>
          <AppLayout>
            <MainPage />
            {/* <CoinOverview />
                <TransactionList /> */}
          </AppLayout>
        </ModalProvider>
      </Provider>
    );
  }
}

export default CoinApp;
