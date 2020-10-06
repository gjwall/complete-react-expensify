import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from './../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        <h1>Expense list</h1>
        {
            props.expenses.map((expense) => {
                return <ExpenseListItem key={expense.id} {...expense} />
            })
        }
    </div>
);

const mapStateToProps = () => (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
};

// https://react-redux.js.org/api/connect
// (ExpenseList) enables the wrapper function to be called right away
// no need for saving in a temporary variable
export default connect(mapStateToProps)(ExpenseList);