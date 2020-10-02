import {createStore, combineReducers} from 'redux';
import {v4 as uuidv4} from 'uuid';

// ADD_EXPENSE
const AddExpense = (
        {description = '',
        note = '',
        amount = 0,
        createdAt = 0} = {}
    ) => ({
        type: 'ADD_EXPENSE',
        expense: {
            id: uuidv4(),
            description,
            note, 
            amount,
            createdAt
        }
});

//REMOVE_EXPENSE
const removeExpense = (
        {id} = {}
    ) => ({
        type: 'REMOVE_EXPENSE',
        expense: {
            id
        }
    }
);

//EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
  });

// Expenses reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(( {id} ) => id !== action.expense.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                }
            });
        default: 
            return state;
    }
};

//SET_TEXT
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// Filter reducer
const filtersReducerDefaultState = {text: '', sortBy: 'date', startDate: undefined, endDate: undefined};
const filterReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state, 
                text: action.text
            }           
        default: 
            return state;
    }
};

// store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducer
    })
);

store.subscribe(() => {
    console.log(store.getState());
});

const expenseOne = store.dispatch(AddExpense( {description: 'rent', amount: 100 }));
//console.log('One', expenseOne);
const expenseTwo = store.dispatch(AddExpense( {description: 'Coffee', amount: 300 }));
//console.log('Two', expenseTwo);
store.dispatch(removeExpense( {id: expenseOne.expense.id }));

store.dispatch(editExpense( expenseTwo.expense.id, {amount: 500} ));

store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter(''));

const demoState = {
    expenses: [{
        id: 'randomid',
        description: 'January rent',
        note: 'this is a description',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }  
};

const user = {
    name: 'Jen',
    age: 50
};

console.log({ age: 5, 
            ...user, 
            location:'here', 
            age: 10 
});