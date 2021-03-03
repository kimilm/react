import { connect } from 'react-redux';
import TransactionPaginateion from '../../components/main/TransactionPaginateion';
import {
  FETCH_TRANSACTION_LIST,
  requestTransactionList,
} from '../../actions/transactionPackActions';
import { transactionListLoadingStateSelector } from '../../selectors/transactionSelectors';

const mapStateToProps = (state) => {
  //   const { pagination, loadingState, ids } = state.transactions;
  //   const loading = loadingState[FETCH_TRANSACTION_LIST];
  //   const { number, size } = pagination;

  //   return {
  //     searchParams: state.searchFilter.params,
  //     pageNumber: number || 1,
  //     hasNext: ids.length === size,
  //     loading,
  //   };

  const { pagination } = state.transactions;
  const { number } = pagination;
  return { pageNumber: number || 1, loading: transactionListLoadingStateSelector(state) };
};

const mapDispatchToProps = {
  requestTransactionList,
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionPaginateion);
