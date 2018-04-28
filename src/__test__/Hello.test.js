import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Hello from '../components/Task_1/Hello';

describe('<Hello />', () => {
  test('should be render a default Hello', () => {
    const hello = shallow(<Hello name='test' />);

    expect(toJson(hello)).toMatchSnapshot();
  });

  test('should be get props', () => {
    const hello = mount(<Hello name='Jest' />);

    expect(hello.prop('name')).toEqual('Jest');
  });
});
