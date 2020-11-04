import selectExpensesTotal from './../../selectors/expenses-total';
import expenses from './../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const expected = 0;
    const result = selectExpensesTotal([]);
    expect(result).toBe(expected);
});

// Pass in an array of one
test('should correctly add up a single expense', () => {
    const expected = expenses[0].amount;
    const result = selectExpensesTotal([expenses[0]]);
    expect(result).toBe(expected);
});

test('should correctly add up multiple expenses', () => {
    const expected = 114195;
    const result = selectExpensesTotal(expenses);
    expect(result).toBe(expected);
});