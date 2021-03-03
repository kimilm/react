import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../reducers';
import { SET_TRANSACTION_LIST } from '../actions/transactionActions';
import thunk from 'redux-thunk';

import notificationEffects from '../middlewares/notificationEffects';
import transactionEffects from '../middlewares/transactionEffects';

import { middleware as reduxPackMiddleware } from 'redux-pack';
import searchFilterEffects from '../middlewares/searchFilterEffects';
import routerEffects from '../middlewares/routerEffects';

const customMiddleware = store => nextRunner => action => {
    console.log('액션 객체', action);   // nextRunner 이전에 실행
    console.log('리듀서 실행 전', store.getState());   // nextRunner 함수 이전에 실행2
    
    const result = nextRunner(action);

    console.log('리듀서 실행 후', store.getState());   // nextRunner 함수 이전에 실행2

    return result;
}

const customMiddleware2 = store => nextRunner => action => {
    console.log('미들웨어2 전달 액션 객체', action);   // nextRunner 이전에 실행
    console.log('미들웨어2 실행 전', store.getState());   // nextRunner 함수 이전에 실행2
    
    const result = nextRunner(action);

    console.log('미들웨어2 실행 후', store.getState());   // nextRunner 함수 이전에 실행2

    return result;
}

const customMiddleware1 = () => nextRunner => action => {
    if(action.type === SET_TRANSACTION_LIST) {
        return nextRunner({
            ...action,
            payload: [{
                id: 0,
                code: 'DOIT',
                name: '두잇코인(DOIT)',
                totalPrice: 1000000000,
                currenrPrice: 25000,
                datetime: '현재시간',
            }]
        });
    }

    return nextRunner(action);
}

export default initStates => createStore(
    combineReducers(reducers),
    initStates,
    // composeWithDevTools(),
    // applyMiddleware(customMiddleware),
    // applyMiddleware(customMiddleware1),
    // applyMiddleware(customMiddleware, customMiddleware2),
    // composeWithDevTools(applyMiddleware(customMiddleware, customMiddleware2)),
    composeWithDevTools(
        applyMiddleware(
            thunk, reduxPackMiddleware, notificationEffects, searchFilterEffects, routerEffects
        )
    ),
);
