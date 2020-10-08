import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from './../actions/expenses';

const ExpenseListItem = ( {description, amount, createdAt, id, dispatch} ) => {
    return (
        <div>
            <h2>{description}</h2>
            <p>{amount} - {createdAt}</p>
    
            <button onClick={(e) => {
              dispatch(removeExpense({id}))  ;
            }}>
                Remove
            </button>
        </div>
    )
};

export default connect()(ExpenseListItem);