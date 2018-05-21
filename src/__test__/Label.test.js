import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Label from '../components/Label';

describe('<Label />', () => {
  test('should render <Label /> with props', () => {
    const logo = shallow(<Label text='test label' />);

    expect(logo.text()).toEqual('test label');
    expect(toJson(logo)).toMatchSnapshot();
  });
});
