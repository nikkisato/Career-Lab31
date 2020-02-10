import React from 'react';
import { shallow } from 'enzyme';
import Option from './Option';

describe('Option component', () => {
  it('renders Option', () => {
    const wrapper = shallow(<Option />);
    expect(wrapper).toMatchSnapshot();
  });
});
