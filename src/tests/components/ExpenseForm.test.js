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

test('should render error for invalid form submission', () => {
   const wrapper = shallow(<ExpenseForm />);
   expect(wrapper).toMatchSnapshot();
   wrapper.find('form').simulate('submit', {
      preventDefault: () => { }
   });
   expect(wrapper.state('error').length).toBeGreaterThan(0);
   expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
   const value = 'New description';
   const wrapper = shallow(<ExpenseForm />);
   wrapper.find('input').at(0).simulate('change', {
      target: {value}
   });
   expect(wrapper.state('description')).toBe(value);
});

test('should set description on textarea change', () => {
   const value = 'New note value';
   const wrapper = shallow(<ExpenseForm />);
   wrapper.find('textarea').simulate('change', {
      target: {value}
   });
   expect(wrapper.state('note')).toBe(value);
});

test('should set amount if valid input', () => {
   const value = '23.5';
   const wrapper = shallow(<ExpenseForm />);
   wrapper.find('input').at(1).simulate('change', {
      target: {value}
   });
   expect(wrapper.state('amount')).toBe(value);
});

test('should not set amount if invalid input', () => {
   const value = 'x';
   const wrapper = shallow(<ExpenseForm />);
   wrapper.find('input').at(1).simulate('change', {
      target: {value}
   });
   expect(wrapper.state('amount')).toBe('');
});