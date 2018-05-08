import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import NotFound from '../components/NotFound';

describe('<NotFound />', () => {
  test('should render <Label /> with props', () => {
    const notFound = shallow(<NotFound text='NotFound text' />);

    expect(notFound.text()).toEqual('NotFound text');
    expect(toJson(notFound)).toMatchSnapshot();
  });
});
