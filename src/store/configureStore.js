import {createStore, combineReducers} from 'redux';
import expensesReducer from './../reducers/expenses';
import filterReducer from './../reducers/filters';

// https://github.com/zalmoxisus/redux-devtools-extension
// const store = createStore(
//     reducer, /* preloadedState, */
//  +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filterReducer
        })
    );
    return store;
};