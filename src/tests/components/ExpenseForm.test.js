import React from 'react';
import {shallow} from 'enzyme';
import expenses from './../fixtures/expenses';
import ExpenseForm from './../../components/ExpenseForm';

// Need to manually mock because of date
// See https://jestjs.io/docs/en/manual-mocks
// and https://jestjs.io/docs/en/jest-object#jestrequireactualmodulename
// and the __mocks__ directory
test('should render ExpenseForm correctly', () => {
   const wrapper = shallow(<ExpenseForm />); 
   expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm with expense data correctly', () => {
   const wrapper = shallow(<ExpenseForm expense={expenses[1]} />); 
   expect(wrapper).toMatchSnapshot();
});