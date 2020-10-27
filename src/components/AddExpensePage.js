import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {addExpense} from '../actions/expenses';

// A class based component avoids inline functions
export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.addExpense(expense);
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <h1>Add expense</h1>
                <ExpenseForm 
                    onSubmit={this.onSubmit}
                />
            </div>  
        ); 
    };
}

// This function defines various props that call dispatch under the hood
const mapDispatchToProps = (dispatch) => ({
        addExpense: (expense) => dispatchEvent(addExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);