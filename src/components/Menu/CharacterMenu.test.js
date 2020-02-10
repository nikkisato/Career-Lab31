import React from 'react';
import { shallow } from 'enzyme';
import CharacterMenu from './CharacterMenu';

describe('CharacterMenu component', () => {
  it('renders CharacterMenu', () => {
    const wrapper = shallow(<CharacterMenu />);
    expect(wrapper).toMatchSnapshot();
  });
});
