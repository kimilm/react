import React, { PureComponent } from 'tutorial/react';

import Heading from '../../../doit-ui/Heading';
import Card from '../../../doit-ui/Card';
import TransactionSearchFilterContainer from '../../containers/main/TransactionSearchFilterContainer';
import TransactionTable from './TransactionTable';
// import Api from '../../Api';
import TransactionPaginationContainer from '../../containers/main/TransactionPaginationContainer';

class TransactionList extends PureComponent {
  // componentDidMount() {
  //   // Api.get('/transactions').then(({ data }) => this.props.setTransactionList(data));
  //   this.props.requestTransactionList();
  // }

  render() {
    const { transactions, loading } = this.props;
    return (
      <div>
        <Heading level={3}>거래 현황</Heading>
        <Card vertical={4} horizontal={4}>
          <TransactionSearchFilterContainer />
        </Card>
        <Card>
          <TransactionTable transactions={transactions} isLoading={loading} />
        </Card>
        <TransactionPaginationContainer />
      </div>
    );
  }
}

TransactionList.defaultProps = {
  transactions: [],
  setTransactionList: () => {},
};

export default TransactionList;
