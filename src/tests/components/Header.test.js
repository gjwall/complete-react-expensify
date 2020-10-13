import { render } from 'enzyme';
import { TestScheduler } from 'jest';
import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from './../../components/Header';

test('should render Header correctly', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<Header />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
});