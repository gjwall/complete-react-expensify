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
        default: 
            return state;
    }
};

// Filter reducer
const filtersReducerDefaultState = {text: '', sortBy: 'date', startDate: undefined, endDate: undefined};
const filterReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
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
const expenseTwo = store.dispatch(AddExpense( {description: 'Cofee', amount: 300 }));
//console.log('Two', expenseTwo);
store.dispatch(removeExpense( {id: expenseOne.expense.id }));

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