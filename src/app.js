import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

// This sets up a provider that passes a store into all of our components
const jsx = (
    <Provider store={store}>
        <AppRouter /> 
    </Provider>
);

//ReactDOM.render(<AppRouter />, document.getElementById('app')); 
ReactDOM.render(jsx, document.getElementById('app')); 
