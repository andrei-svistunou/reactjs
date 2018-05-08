import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Logo from '../components/Logo';

describe('<Logo />', () => {
  test('should render <Logo /> without props', () => {
    const logo = shallow(<Logo />);

    expect(toJson(logo)).toMatchSnapshot();
  });

  test('should render <Logo /> with props', () => {
    const logo = shallow(<Logo text='test' />);

    expect(logo.find('.main-logo__text').text()).toEqual('test');
    expect(toJson(logo)).toMatchSnapshot();
  });
});
