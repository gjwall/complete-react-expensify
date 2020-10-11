import {addExpense, removeExpense, editExpense} from './../../actions/expenses';
//npm run test -- --watch

test('should remove an expense action object', () => {
    const action = removeExpense( {id: '123abc'} );
    expect(action).toEqual( {
       type: 'REMOVE_EXPENSE',
       id: '123abc'
    });
});

test('should edit and expense action object', () => {
    const action = editExpense( 'xyz123', {note: 'new note value'} );
    expect(action).toEqual( {
        type: 'EDIT_EXPENSE',
        id: 'xyz123',
        updates: {
            note: 'new note value'
        }
    });
});

test('should set up add expense action object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        note: 'This was last months rent',
        amount: 109500,
        createdAt: 1000  
    }
    const action = addExpense(expenseData);
    expect(action).toEqual( {
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String) 
        }
    });
});

test('should set up add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual( {
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    });
});