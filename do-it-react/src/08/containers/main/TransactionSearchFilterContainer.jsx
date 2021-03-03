import { connect } from 'react-redux';
import TransactionSearchFilter from '../../components/main/TransactionSearchFilter';
// import { setTransactionList } from '../../actions/transactionActions';
// import { requestTransactionList } from '../../actions/transactionActions';
import { requestTransactionList } from '../../actions/transactionPackActions';
import { setFilter } from '../../actions/searchFilterActions';

const mapStateToProps = (state) => ({
  initValues: state.searchFilter.params,
});

// export default connect(null, { setTransactionList })(TransactionSearchFilter);
// export default connect(null, { requestTransactionList, setFilter })(TransactionSearchFilter);
export default connect(mapStateToProps)(TransactionSearchFilter);
