import React from 'react';

const ExpenseListItem = ( {description, amount, createdAt} ) => {
    return (
        <div>
            <h2>{description}</h2>
            <p>{amount} - {createdAt}</p>
        </div>
    )
};

export default ExpenseListItem;