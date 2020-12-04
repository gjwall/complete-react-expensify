import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import AddExpensePage from './../components/AddExpensePage';
import EditExpensePage from './../components/EditExpensePage';
import ExpenseDashboardPage from './../components/ExpenseDashboardPage';
import Header from './../components/Header';
import HelpPage from './../components/HelpPage';
import LoginPage from './../components/LoginPage';
import NotFoundPage from './../components/NotFoundPage';

// To avoid history not working, install the same version that react-router installed
// see https://stackoverflow.com/questions/40483942/react-router-cannot-resolve-module-history-missing-lib-folder
export const history = createBrowserHistory(); 

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Header />
            <h1>Header</h1>
            <Switch>
                <Route path="/" component={LoginPage} exact={true} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/dashboard" component={ExpenseDashboardPage} />
                <Route path="/edit/:id" component={EditExpensePage} /> 
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;