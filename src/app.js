import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

store.dispatch(addExpense( { description: 'water bill' } ));
store.dispatch(addExpense( { description: 'gas bill' } ));
store.dispatch(setTextFilter('bill'));
store.dispatch(setTextFilter('water'));

setTimeout(() => {
    store.dispatch(setTextFilter('rent'));
}, 3000)

// This sets up a provider that passes a store into all of our components
const jsx = (
    <Provider store={store}>
        <AppRouter /> 
    </Provider>
);

//ReactDOM.render(<AppRouter />, document.getElementById('app')); 
ReactDOM.render(jsx, document.getElementById('app')); 
