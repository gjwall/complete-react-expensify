import React from 'react';
import moment from 'moment';
import {shallow} from 'enzyme';
import { SingleDatePicker } from 'react-dates';
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
   const value = '12.122';
   const wrapper = shallow(<ExpenseForm />);
   wrapper.find('input').at(1).simulate('change', {
      target: {value}
   });
   expect(wrapper.state('amount')).toBe('');
});

test('should call onSubmit prop for valid form submission', () => {
   const onSubmitSpy = jest.fn();
   const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
   wrapper.find('form').simulate('submit', {
      preventDefault: () => { }
   });
   expect(wrapper.state('error')).toBe('');
   expect(onSubmitSpy).toHaveBeenLastCalledWith({
      description: expenses[0].description,
      amount: expenses[0].amount,
      note: expenses[0].note,
      createdAt: expenses[0].createdAt
   });
});

test('should set new date on date change', () => {
   const now = moment();
   const wrapper = shallow(<ExpenseForm />);
   wrapper.find(SingleDatePicker).prop('onDateChange')(now);
   expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set calendar focus on change', () => {
   const focused = true;
   const wrapper = shallow(<ExpenseForm /> );
   // The event handler expects an object that has a focussed property
   wrapper.find(SingleDatePicker).prop('onFocusChange')( { focused } );
   expect(wrapper.state('calendarFocused')).toBe(focused);
});