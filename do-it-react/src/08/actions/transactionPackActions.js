import Api from '../Api';
import createActions from '../../11/api-redux-pack/createActions';

export const FETCH_TRANSACTION_LIST = 'transaction/FETCH_TRANSACTION_LIST';
export const CREATE_TRANSACTION = 'transaction/CREATE_TRANSACTION';

const { collection, create, reset } = createActions('transactions');
const PAGE_SIZE = 10;

export const resetTransactionList = reset;

export function requestTransactionList(params, _page = 1) {
    const meta = {
        pageNumber: _page,
        pageSize: PAGE_SIZE,
        notification: {
            success: '거래 목록을 최신 정보로 업데이트 했습니다.',
            error: '거래 목록을 갱신하는 중에 문제가 발생했습니다.',
        },
    };

    return collection({
        ...params,
        _page,
        _limit: PAGE_SIZE
    }, meta);
    // return {
    //     type: FETCH_TRANSACTION_LIST,
    //     promise: Api.get('/transactions', { 
    //         params: {
    //             ...params,
    //             _page,
    //             _limit: PAGE_SIZE,
    //         } 
    //     }),
    //     meta: {
    //         pageNumber: _page,
    //         pageSize: PAGE_SIZE,
    //         notification: {
    //             success: '거래 목록을 최신 정보로 업데이트 했습니다.',
    //             error: '거래 목록을 갱신하는 중에 문제가 발생했습니다.',
    //         }
    //     }
    // }
}

export function createTransaction(data, onComplete) {
    const meta = {
        onSuccess: onComplete,
        notification: {
            success: '거래가 성공적으로 완료되었습니다.',
        }
    }

    return create(data, {}, meta);
    // return {
    //     type: CREATE_TRANSACTION,
    //     promise: Api.post('/transactions', data),
    //     meta: {
    //         onSuccess: onComplete,
    //         notification: {
    //             success: '거래가 성공적으로 완료되었습니다.',
    //         }
    //     }
    // };
}