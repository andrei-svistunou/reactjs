import React from 'react';
import { shallow } from 'enzyme';
import SubHeader from '../components/SubHeader';

describe('<SubHeader />', () => {
  describe('Shapshot', () => {
    test('should render <SubHeader /> without children', () => {
      const wrapper = shallow(<SubHeader />);

      expect(wrapper).toMatchSnapshot();
    });

    test('should render <SubHeader /> with children', () => {
      const wrapper = shallow(<SubHeader><p>test children</p></SubHeader>);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
