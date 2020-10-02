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

//SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// store.dispatch(sortByAmount()); // amount
// store.dispatch(sortByDate());   // date
//SORT_BY_AMOUNT_FILTER
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT_FILTER',
    sortBy: 'Amount'
});

// SORT_BY_DATE_FILTER
const sortByDate = () => ({
    type: 'SORT_BY_DATE_FILTER',
    sortBy: 'Date'
});

//SET_START_DATE
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
}); 

//SET_END_DATE
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate 
}); 

// Filter reducer
const filtersReducerDefaultState = {text: '', sortBy: 'date', startDate: undefined, endDate: undefined};
const filterReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state, 
                text: action.text
            };
        case 'SORT_BY_AMOUNT_FILTER':
            // Fall through this case
        case 'SORT_BY_DATE_FILTER':
            return {
                ...state,
                sortBy: action.sortBy
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };
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

// const expenseOne = store.dispatch(AddExpense( {description: 'rent', amount: 100 }));
// //console.log('One', expenseOne);
// const expenseTwo = store.dispatch(AddExpense( {description: 'Coffee', amount: 300 }));
// //console.log('Two', expenseTwo);
// store.dispatch(removeExpense( {id: expenseOne.expense.id }));

// store.dispatch(editExpense( expenseTwo.expense.id, {amount: 500} ));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter(''));

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());   

store.dispatch(setStartDate(125));
store.dispatch(setStartDate());
store.dispatch(setEndDate(1250));

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
        sortBy: 'amount', // or date
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