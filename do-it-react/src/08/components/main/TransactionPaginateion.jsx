import React, { PureComponent } from 'tutorial/react';
import PropTypes from 'prop-types';
import Button from '../../../doit-ui/Button';
import InlineList from '../../../doit-ui/InlineList';
import { propTypes } from '../../../doit-ui/Spacing';

class TransactionPaginateion extends PureComponent {
  constructor(props) {
    super(props);
    this.handleNextPress = this.handleNextPress.bind(this);
    this.handlePrevPress = this.handlePrevPress.bind(this);
  }
  handleNextPress() {
    const { requestTransactionList, pageNumber, searchParams } = this.props;
    requestTransactionList(searchParams, pageNumber + 1);
  }
  handlePrevPress() {
    const { requestTransactionList, pageNumber, searchParams } = this.props;
    requestTransactionList(searchParams, pageNumber - 1);
  }
  render() {
    const { loading, pageNumber, hasNext } = this.props;
    const prevDisabled = loading || pageNumber <= 1;
    const nextDisabled = loading || !hasNext;

    return (
      <InlineList align="right">
        <Button secondary disabled={prevDisabled} onPress={this.handlePrevPress}>
          이전
        </Button>
        <Button primary disabled={nextDisabled} onPress={this.handleNextPress}>
          다음
        </Button>
      </InlineList>
    );
  }
}

TransactionPaginateion.propTypes = {
  hasNext: PropTypes.bool,
  pageNumber: PropTypes.number,
  loading: PropTypes.bool,
  requestTransactionList: PropTypes.func.isRequired,
};

export default TransactionPaginateion;
