import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

store.dispatch(addExpense( { description: 'water bill', amount: 4500 } ));
store.dispatch(addExpense( { description: 'gas bill', createdAt: 10000 } ));
store.dispatch(addExpense( { description: 'rent', amount: 10095 } ));

// This sets up a provider that passes a store into all of our components
const jsx = (
    <Provider store={store}>
        <AppRouter /> 
    </Provider>
);

//ReactDOM.render(<AppRouter />, document.getElementById('app')); 
ReactDOM.render(jsx, document.getElementById('app')); 
