import database from './../firebase/firebase';

/* 
* Before firebase,
* component calls action generator
* action generator returns object
* component dispatches object
* redux store changes
*
* After firebase
* component calls action generator
* action generator returns function
* component dispatches function
* function runs (has the abilityto dispatch other actions and does whatever it wants, firebase goes here)
//*/

// ADD_EXPENSE
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0 
        } = expenseData;
        const expense = {
            description, 
            note, 
            amount, 
            createdAt
        };
        return database.ref('expenses').push(expense).then( (ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    };
};

//REMOVE_EXPENSE
export const removeExpense = (
    {id} = {}
) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
  });

  // SET_EXPENSES
  export const setExpenses = ( (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
  }));

  //export const startSetExpenses;
  // 