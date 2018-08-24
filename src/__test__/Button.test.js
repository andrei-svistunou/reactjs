import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Button from '../components/Button';

describe('<Button />', () => {
  test('should render a button primary', () => {
    const btn = shallow(<Button classes='btn--primary' value='Click' onClick={jest.fn()}/>);

    expect(toJson(btn)).toMatchSnapshot();
  });

  test('should be get prop value', () => {
    const btn = shallow(<Button classes='btn--primary' value='Jest' onClick={jest.fn()} />);

    expect(btn.prop('value')).toEqual('Jest');
    expect(toJson(btn)).toMatchSnapshot();
  });
});
