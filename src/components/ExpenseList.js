import React from 'react';
import { connect } from 'react-redux';

const ExpenseList = (props) => (
    <div>
        <h1>Expense list</h1>
        {props.filters.text}
        {props.expenses.length}
    </div>
);

const mapStateToProps = () => (state) => {
    return {
        expenses: state.expenses,
        filters: state.filters
    }
};

// https://react-redux.js.org/api/connect
// (ExpenseList) enables the wrapper function to be called right away
// no need for saving in a temporary variable
export default connect(mapStateToProps)(ExpenseList);