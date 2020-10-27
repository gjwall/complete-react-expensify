import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense, removeExpense} from '../actions/expenses';

/*
Refactor to be a classed based component
set up mapDispatchToProps

1) should render EditExpensePage 
// snapshot

2) should handle editExpense
// spies

3) should handle removeExpense
// spies
*/

const EditExpensePage = (props) => {
    return (
        <div>
            <ExpenseForm 
                expense={props.expense}
                onSubmit={(expense) => {
                    props.dispatch(editExpense(props.expense.id, expense));
                    props.history.push('/');
                }}
            />
            <button onClick={(e) => {
                props.dispatch(removeExpense( {id: props.expense.id} ));
                props.history.push('/');
              }}>
                  Remove
              </button>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id )
    };
};

export default connect(mapStateToProps)(EditExpensePage);